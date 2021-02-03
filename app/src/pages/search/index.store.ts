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
  const { list: gradeList } = useOptionFormListHook({ url: '/grade/list' })
  const { list: subjectList } = useOptionFormListHook({ url: '/subject/list' })
  const { list: tagList } = useOptionFormListHook({ url: '/tag/list' })
  const { list: gradeStepList } = useOptionFormListHook({ url: '/gradeStep/list' })
  const [count, setCount] = useState(0);
  const [showfilterPanel, setShowFilterPanel] = useState(false);
  const [query, setQuery] = useState<queryType>({})
  const [sort, setSort] = useState<SortType>("default")

  const updateQuery = (q: queryType) => {
    if (q.gradeId != undefined && q.gradeId != query.gradeId) {
      q.gradeStepId = ""
    }
    setQuery(Object.assign({}, query, q))
  }

  return {
    gradeList,
    showfilterPanel,
    setShowFilterPanel,
    count,
    setCount,
    setSort,
    sort,
    query,
    subjectList,
    tagList,
    setQuery,
    updateQuery,
    gradeStepList
  };
}

export default createModel(useModel);