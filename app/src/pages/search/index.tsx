import React from 'react'
import { View, ScrollView, Input, Image } from '@tarojs/components'
import './index.less'
import icon_search from '../../resource/icon/search.png'
import icon_arrow_up from '../../resource/icon/arrow_up.png'
import useModel, { SortType } from "./index.store";
import { usePage } from '../../utils/hooks'
import { Grade, Paper, GradeStep } from '../../types'

// @type React Component | @dec 查询框
function SearchBar()  {
  return <View style='position: relative;' className='p-l-30 p-r-30'>
    <Image src={icon_search} className='search-bar-icon'/>
    <Input className='search-bar' type='text' placeholder='请输入关键字'/>
  </View>
}
// @type React Component | @dec 下拉标签过滤框
function FilterPanel() {
  const { setShowFilterPanel, gradeList, updateQuery, query, gradeStepList} = useModel();
  return <View className='tag-pannel'>
    <View className='tag-bar flex-row-center'>
      <View className='tag-type'>
        分类
      </View>
      <ScrollView scrollX className='tag-scroll-view'>
        <View 
          onClick={()=>updateQuery({gradeId: ''})}
          className={!query.gradeId ? 'tag_active' : 'tag'}>全部</View>
          {gradeList.map((item: Grade)=>{
          return <View 
            key={item.id} 
            className={query.gradeId == item.id ? 'tag_active' : 'tag'}
            onClick={()=>{updateQuery({gradeId: item.id})}}
          >
              {item.name}
            </View>
        })}
      </ScrollView>
    </View>
    {query.gradeId && <View className='tag-bar flex-row-center'>
      <View className='tag-type'>
        学期
      </View>
      <ScrollView scrollX className='tag-scroll-view'>
       <View 
          onClick={()=>updateQuery({gradeStepId: ''})}
          className={!query.gradeStepId ? 'tag_active' : 'tag'}>全部</View>
          {gradeStepList.filter((s:GradeStep)=>s.gradeId == query.gradeId).map((item: GradeStep)=>{
              return <View 
              key={item.id} 
              onClick={()=>{updateQuery({gradeStepId: item.id})}} 
              className={item.id == query.gradeStepId ? 'tag_active' : 'tag'}>
                {item.name}
              </View>
          })}
      </ScrollView>
    </View>}
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
    <View className='flex-center'>
      <Image onClick={()=>{
        setShowFilterPanel(false)
      }} className='icon_arrow_up p-20' src={icon_arrow_up}></Image>
    </View>
  </View>
}
function DropButtonPanel() {
  const model = useModel();
  const getItemClass = (item: SortType) => item && model.sort == item ? 'order-button color-333': 'order-button'
  return <View className='filter-panel'>
    <View className='drop-button-panel'>
        <View 
          onClick={()=>{model.setSort("default")}}
          className={getItemClass("default")}>
          综合排序
        </View>
        <View 
          onClick={()=>{model.setSort("created")}}
          className={getItemClass("created")}>
          最新
        </View>
        <View 
          onClick={()=>{model.setSort("free")}}
          className={getItemClass("free")}>
          免费
        </View>
        <View  
          onClick={()=>{ model.setShowFilterPanel(!model.showfilterPanel) }}
          className='drop-button'>
          筛选
      </View>
    </View>
    {model.showfilterPanel && <FilterPanel/>}
  </View>
}
// @type Page | @dec 试卷列表
function PaperList() {
    const { list } = usePage({url: '/paper/page', pageSize: 20, query: {}})
    const model = useModel();
    return <View className='paper-list'>
      {model.showfilterPanel && <View 
        onClick={()=>{model.setShowFilterPanel(false)}}
        className='list-dackdim'></View>}
      {list.map((item: Paper)=>{
        return <View key={item.id} className='paper-item flex-between'>
            <View className='flex-center'>
              <View className='paper-pic'> 
              </View>
              <View className='paper-info'> 
                  <View>部编人教版小学语文一年级上册全册配套测试卷(附答案)</View>
                  <View className='paper-info-dec flex-row-center'>
                    <View className='paper-info-tag'>小学数学</View>
                  </View>
              </View>
            </View>
            
            <View className='paper-data'> 
                <View className='paper-price'> ¥1</View>
                <View>123下载</View>
                <View>1125收藏</View>
            </View>
          </View>
      })}
      
    </View>
}
// @type Page | @dec 主页面
function Index(props) {
  const model = useModel();
  return <View className='search-page page'>
      <View className='search-header'>
        <View className='navigationBar'>
          <View className='navigationBar-title flex-center'>
              资源中心
          </View>
          <SearchBar/>
        </View>
     <DropButtonPanel/>
     </View>
     <PaperList></PaperList>
  </View>
}




export default Index;

