import { useState } from "react";
import { createModel } from "hox";
import { useOptionFormListHook } from "../../utils/hooks";


export type SortType = "free" | "created" | "default" | undefined
export interface queryType {
  gradeId?: string,
  gradeStepId?: string,
  subjectId?: string,
  tagIds?: string[]
}

function useModel() {
  const {
    list: gradeList, 
    optionsMap: gradeOptionMap,} = useOptionFormListHook({url: '/grade/list'})
  const {
    list: gradeStepList,
    optionsMap: gradeStepOptionMap,
  } = useOptionFormListHook({url: '/gradeStep/list'})
  const { list: subjectList } = useOptionFormListHook({ url: '/subject/list' })
  const { list: tagList } = useOptionFormListHook({ url: '/tag/list' })
  const [showfilterPanel, setShowFilterPanel] = useState(false);
  const [query, setQuery] = useState<queryType>({})
  const [sort, setSort] = useState<SortType>("default")
 
  const {
    optionsMap: tagOptionMap,
  } = useOptionFormListHook({
    url: '/tag/list',
  });
  const {
    optionsMap: subjectOptionMap,
  } = useOptionFormListHook({
    url: '/subject/list',
  });

  const updateQuery = (q: queryType) => {
    if (q.gradeId != undefined && q.gradeId != query.gradeId) {
      q.gradeStepId = ""
    }
    setQuery(Object.assign({}, query, q))
  }

  return {
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
    subjectOptionMap
  };
}

export default createModel(useModel);