import { useEffect, useState } from "react";
import { createModel } from "hox";
import { useOptionFormListHook, usePage } from "../../utils/hooks";
import { deleteObjectEmptyKey } from '../../utils/index'

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
  const { list: gradeList, optionsMap: gradeOptionMap } = useOptionFormListHook({url: '/grade/list'})
  const { list: gradeStepList, optionsMap: gradeStepOptionMap } = useOptionFormListHook({url: '/gradeStep/list'})
  const { list: subjectList } = useOptionFormListHook({ url: '/subject/list' })
  const { list: tagList } = useOptionFormListHook({ url: '/tag/list' })
  const [ showfilterPanel, setShowFilterPanel ] = useState(false);
  const [ query, setQuery ] = useState<queryType>({})
  const [ sort, setSort ] = useState<SortType>(SortEnum.download)
  const { optionsMap: tagOptionMap,} = useOptionFormListHook({url: '/tag/list'});
  const { optionsMap: subjectOptionMap,} = useOptionFormListHook({url: '/subject/list'});
  const { list, updateQueryAndSort} = usePage(
    { 
      url: '/paper/page', 
      pageSize: 20, 
      query: {}, 
      sort: {value: SortEnum.download, direction: 'DESC'}
    })
  
  useEffect(()=>{
    console.log('debug:筛选条件发生了变化', query, sort);
    seaech()
  }, [query, sort])

  const seaech = () =>{
    let _query = JSON.parse(JSON.stringify(query)) 
    deleteObjectEmptyKey(_query)
    updateQueryAndSort(_query, {
      "value": sort,
		  "direction": sort == SortEnum.free ? "ASC" : "DESC"
    }, keyword)
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
    subjectList,
    tagList,
    setQuery,
    updateQuery,
    gradeList,  
    gradeStepList,
    gradeOptionMap,
    gradeStepOptionMap,
    tagOptionMap,
    subjectOptionMap,
    keyword,
    setKeyword,
    seaech
  };
}

export default createModel(useModel);