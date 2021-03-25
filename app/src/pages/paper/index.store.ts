import { useEffect, useState } from "react";
import { createModel } from "hox";
import { Paper } from "../../types";
import request from '../../utils/request'
import { getCurrentInstance } from '@tarojs/taro'

function useModel() {
  const [paper, setPaper] = useState<Paper>()
  const getPaper = () => {
    const params = getCurrentInstance()?.router?.params
    request({
      url: "/paper/one",
      data: { id:  params?.id}
    }).then((res)=>{
      console.log('获取当前试卷成功，', res)
      if(res?.status == 0) {
        setPaper(res.result)
      }
    })
  }
  return {
    paper,
    getPaper
  };
}

export default createModel(useModel);