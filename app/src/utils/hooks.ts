import { useEffect, useRef, useState } from "react";
import request from './request'

//@type Hook Function 分页Hoos,TS版本
interface usePageProps {
  url: string,
  pageSize: number,
  query: Object,
  onReloadAfter?: (res: any) => void
}

export function usePage(props: usePageProps) {

  const { url, pageSize, onReloadAfter } = props;
  const [query, setQuery] = useState<any>(props.query);
  const [status, setStatus] = useState<string>('more');
  const [total, setTotal] = useState<number>(0);
  const [list, setList] = useState([]);

  const ref = useRef({ pageNo: 1 });

  useEffect(() => {
    reload()
  }, [query])

  const reload = async (pageNo?: number) => {
    setStatus('loading');
    if (!pageNo) pageNo = 1;
    ref.current.pageNo = pageNo;
    const pz = pageSize || 10;
    const resp: any = await request({
      url, data: {
        query,
        pageNo,
        pageSize: pz
      }
    });
    console.log('分页PAGE获取成功',query, resp)
    if (resp.status === 0) {
      setTotal(resp.page.total);
      let newList
      if (pageNo === 1) {
        newList = resp.page.list
      } else {
        newList = [].concat(list, resp.page.list.filter((x: any) => list.find((y: any) => y.id === x.id) ? false : true))
      }
      setList(newList);
      ref.current.pageNo = pageNo + 1;
      if (resp.page.pages < pz) {
        setStatus('noMore');
      } else {
        setStatus("more");
      }
    } else {
      setStatus("noMore");
    }
    onReloadAfter && onReloadAfter(resp);
  }
  const loadMore = async () => {
    if (status === 'noMore') return;
    await reload(ref.current.pageNo);
  }
  return { list, setList, status, setStatus, reload, loadMore, total, setQuery };
}


interface useOptionFormListHookProps {
  url: string,
  query?: Object,
  expiresTime?: number,
}

interface Options {
  label: string,
  value: string,
}

export function useOptionFormListHook(props: useOptionFormListHookProps) {
  const  {
    url, query=''
  } = props;
  const [list, setList] = useState([]);
  const [optionsMap, setOptionsMap] = useState<any>({});
  const [options, setOptions] = useState<Options[]>([]);
  useEffect(() => {
    request({ url, data: { query } }).then((res: any) => {
        if (res.status == 0 && res.list) {
          refresh(res)       
        }
    })
  }, [])

  const refresh = (res: any) => {
    let newOptions: Options[] = []
    let newOptionsMap: any = {}
    res.list.forEach((item: any) => {
      newOptionsMap[item.id] = item
      newOptions.push({
        label: item.name,
        value: item.id,
      })
    })
    setList(res.list)
    setOptionsMap(newOptionsMap)
    setOptions(newOptions);
  }
  return {
    list,
    optionsMap,
    options
  }
}


const chHooks = {
  usePage,
  useOptionFormListHook,
}

export default chHooks  
