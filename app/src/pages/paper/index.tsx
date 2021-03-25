import React, { useEffect, useState } from 'react'
import { View, Image, Text, Icon } from '@tarojs/components'
import Taro from '@tarojs/taro'
import useModel from "./index.store";
import useGlobalModel from "../../app.store"
import { termType } from '../../config/common.data';
import './index.less'


function PaperHeader() {

  const globalModel = useGlobalModel()
  const {
    gradeOptionMap,
    gradeStepOptionMap,
  } = globalModel
  const model = useModel()
  const { paper, getPaper } = model

  return <View>
  <View className='paper-header flex-row-center'>
      <View className='paper-header-avatar'>
      </View>
      <View className='paper-header-info'>
        <View>{paper?.name}</View>
        <View>{ paper?.price ? '¥' + paper.price : ''}</View>
      </View>
    </View>
    <View className='paper-info'>
    <View className='flex-between'>
      <View className='paper-info-item'>分类：{paper && gradeOptionMap[paper?.gradeId].name}</View>
      <View className='paper-info-item'>年级：{paper && gradeStepOptionMap[paper?.gradeStepId].name}</View> 
      <View className='paper-info-item'>学期：{paper && termType[paper?.term]}</View>
    </View>
    <View className='flex-between m-t-20'>
      <View className='paper-info-item'>下载：201</View> 
      <View className='paper-info-item'>浏览：3321</View> 
      <View className='paper-info-item'>收藏：678</View>
    </View>
    </View>
    </View>
}


function Index() {
  const model = useModel()
  const { getPaper, paper } = model
  useEffect(()=>{
    getPaper()
  }, [])
  return <View className='paper-page page'>
    <PaperHeader></PaperHeader>
    <View className='paper-preview-content'>
        <Image src="https://paper-file.kukechen.top/21fa0a6b-38a2-4b91-846a-c2a3f128ffa8/0.jpg" className='paper-preview-image'></Image>
    </View>
    <View onClick={()=>{
      Taro.showModal({
        title: '复制下载地址成功',
        content: '请在手机或者电脑浏览器打开该连接下载',
        showCancel: false,
        success (res) {
          Taro.setClipboardData({
            data: `${paper?.file}?attname=${paper?.name}.${paper?.fileType}`,
          })
        }
      })
    }} className='paper-download flex-center'>
        点击下载
    </View>
  </View>
}
export default Index;

