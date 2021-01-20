import React from 'react'
import { View, ScrollView, Input, Image } from '@tarojs/components'
import './index.less'
import icon_search from '../../resource/icon/search.png'

// @type React Component | @dec 下拉标签过滤框
function SearchBar()  {
  return <View style='position: relative;' className='p-l-30 p-r-30'>
    <Image src={icon_search} className='search-bar-icon'/>
    <Input className='search-bar' type='text' placeholder='请输入关键字'/>
  </View>
}
function FilterPanel() {
  return <View className='tag-pannel'>
    <View className='tag-bar flex-row-center'>
      <View className='tag-type'>
        分类
      </View>
      <ScrollView scrollX className='tag-scroll-view'>
        <View className='tag_active'>小学</View>
        <View className='tag'>初中</View>
        <View className='tag'>高中</View>
        <View className='tag'>大学</View>
      </ScrollView>
    </View>
    <View className='tag-bar flex-row-center'>
      <View className='tag-type'>
        学期
      </View>
      <ScrollView scrollX className='tag-scroll-view'>
        <View className='tag_active'>一年级上</View>
        <View className='tag'>一年级下</View>
        <View className='tag'>二年级上</View>
        <View className='tag'>二年级下</View>
        <View className='tag'>三年级上</View>
        <View className='tag'>三年级下</View>
      </ScrollView>
    </View>
    <View className='tag-bar flex-row-center'>
      <View className='tag-type'>
        学科
      </View>
      <ScrollView scrollX className='tag-scroll-view'>
        <View className='tag'>数学</View>
        <View className='tag'>语文</View>
        <View className='tag_active'>英语</View>
        <View className='tag'>化学</View>
      </ScrollView>
    </View>
    <View className='tag-bar flex-row-center'>
      <View className='tag-type'>
        标签
      </View>
      <ScrollView scrollX className='tag-scroll-view'>
        <View className='tag'>2020年高考</View>
        <View className='tag'>小升初</View>
        <View className='tag_active'>名校专题</View>
      </ScrollView>
    </View>
  </View>
}


// @type Page
function Index(props) {
  return <View className='search-page page'>
      <View className='navigationBar'>
        <View className='navigationBar-title flex-center'>
            资源中心
        </View>
        <SearchBar/>
      </View>
      <View className='drop-button-panel'>
          <View className='drop-button'>
            免费
          </View>
      </View>
      <FilterPanel/>
  </View>
}

export default Index;

