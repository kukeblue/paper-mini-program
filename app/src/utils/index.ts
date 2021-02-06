
/***********************************
 ** utils common --- 常用工具处理  **
 *********************************/

export const sleep = (t: number) => {
     return new Promise((resolve, _)=>{
        setTimeout(()=>{
            resolve(1)
        }, t)
     })
 }

 export const deleteObjectEmptyKey = (data: any) => {
    Object.keys(data).forEach(key=>{
        if(data[key] === undefined || data[key] === null || data[key] === "") {
            delete data[key]
        }
    })
}