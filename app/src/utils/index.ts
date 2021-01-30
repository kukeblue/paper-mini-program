
/***********************************
 ** utils common --- 常用工具处理  **
 *********************************/
import Taro from '@tarojs/taro'

export const sleep = (t: number) => {
     return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(1)
        }, t)
     })
 }