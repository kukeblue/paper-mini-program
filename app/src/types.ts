/***********************************
 **    types --- 全局类型接口定义  ***
 *********************************/

export interface User {
    created?: Date
    updateTime?: Date
    id: string
    openid: string
    province?: string
    country?: string
    city?: string
    gender?: number
    language?: string
    avatarUrl?: string
    nickName?:string
}


export interface  Paper {
    size: number
    id: string
    name: string
    fileName: string
    fileType: string
    gradeId: string
    subjectId: string
    term: string
    price: number
    gradeStepId: string
    year: string;
    tagIds: string[]
    previewLinks: string[]
    region:string[]
    file: string
}

export interface Grade {
    id: string;
    name: string;
}

export interface GradeStep {
    id: string
    gradeId: string
    name: string
    alias: string
}