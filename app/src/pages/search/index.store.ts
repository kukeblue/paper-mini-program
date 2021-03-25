import { useEffect, useState } from "react";
import { createModel } from "hox";
import { usePage } from "../../utils/hooks";
import { deleteObjectEmptyKey } from '../../utils/index'
let pageloaded = false

export type SortType = "price" | "created" | "download" | undefined
export interface queryType {
  gradeId?: string,
  gradeStepId?: string,
  subjectId?: string,
  tagIds?: string[]
}

export enum SortEnum {
  new = "created",
  free = "price",
  download = "download",
}

function useModel() {
  const [keyword, setKeyword] = useState<string>()
  const [ showfilterPanel, setShowFilterPanel ] = useState(false);
  const [ query, setQuery ] = useState<queryType>({})
  const [ sort, setSort ] = useState<SortType>(SortEnum.download)
  const {total, list, reload, loadMore} = usePage(
  { 
      url: '/paper/page', 
      pageSize: 5, 
      query, 
      sort: {value: SortEnum.download, direction: 'DESC'}
  })

  useEffect(()=>{
    // 避免第一次刷新
    if(!pageloaded) {
      pageloaded = true
    }else {
      seaech()
    }
  }, [sort, query])

  const seaech = () =>{
    let _query = JSON.parse(JSON.stringify(query)) 
    deleteObjectEmptyKey(_query)
    reload(1, {
      query: _query,
      sort: {
        "value": sort,
		    "direction": sort == SortEnum.free ? "ASC" : "DESC"
      },
      keyword
    })
  }

  const updateQuery = (q: queryType) => {
    if (q.gradeId != undefined && q.gradeId != query.gradeId) {
      q.gradeStepId = ""
    }
    setQuery(Object.assign({}, query, q))
  }

  

  return {
    list,
    showfilterPanel,    // 展开查询过滤列表
    setShowFilterPanel, // 展开查询过滤列表(设置)
    setSort,
    sort,
    query,
    setQuery,
    updateQuery,
    keyword,
    setKeyword,
    seaech,
    loadMore,
    total,
    pageloaded
  };
}

export default createModel(useModel);