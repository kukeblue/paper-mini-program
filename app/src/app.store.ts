import { createModel } from "hox";
import { useOptionFormListHook } from "./utils/hooks";

function useModel() {
  const { list: gradeList, optionsMap: gradeOptionMap } = useOptionFormListHook({url: '/grade/list'})
  const { list: gradeStepList, optionsMap: gradeStepOptionMap } = useOptionFormListHook({url: '/gradeStep/list'})
  const { list: subjectList, optionsMap: subjectOptionMap } = useOptionFormListHook({ url: '/subject/list' })
  const { list: tagList, optionsMap: tagOptionMap } = useOptionFormListHook({ url: '/tag/list' })
  return {
    subjectList,
    tagList,
    gradeList,  
    gradeStepList,
    gradeOptionMap,
    gradeStepOptionMap,
    tagOptionMap,
    subjectOptionMap,
  };
}
export default createModel(useModel);