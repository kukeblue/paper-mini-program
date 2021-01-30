/***********************************
 ** utils request --- 小程序请求类  **
 *********************************/


import Taro from "@tarojs/taro";
import { sleep } from ".";
const baseUrl = 'https://api-paper.kukechen.top/api'

export interface CResponse  {
    status: number
    errorCode: string
    errorMsg: string
    message: string
    result: any
    list: []
}
export interface RequestArgs  {url:string, data?:any, options?: any}
export const RequestExtraData = {
    Auth: null,
    "content-type": 'application/json'
}
// 请求队列
const queue: RequestArgs[] = [];

const request = async (args: RequestArgs): Promise<CResponse | undefined> => {
    const {url, data, options} = args
    let counter = 1;
    while(!RequestExtraData.Auth && !url.includes('login') && counter < 10) {
        await sleep(1000)
        counter = counter + 1
    }
    if(!(counter < 10)) {
        throw new Error("请求运载燃料不足，请求注入Auth")
    }
    try {
        const res = await Taro.request({
            method: 'POST',
            url: baseUrl + url,
            data: data,
            header: RequestExtraData
        })
        if(res.data) {
            return res.data
        }else {
            throw new Error("请求抛锚飞到了外太空," + res.errMsg)
        }
    }catch(err) {
        console.error(err)
    }
}

export default request