import React from 'react'
import { View, ScrollView, Input, Image, Text} from '@tarojs/components'
import './index.less'
import icon_search from '../../resource/icon/search.png'
import icon_arrow_up from '../../resource/icon/arrow_up.png'
import useModel, { SortEnum, SortType } from "./index.store";
import { usePage } from '../../utils/hooks'
import { Grade, Paper, GradeStep, Subject, Tag } from '../../types'
import { termType } from '../../config/common.data'

// @type React Component | @dec 查询框
function SearchBar() {
  const { keyword, setKeyword, seaech } = useModel();

  return <View style='position: relative;' className='p-l-30 p-r-30'>
    <Image src={icon_search} className='search-bar-icon' />
    <Input 
      onInput={(v)=>{setKeyword(v.detail.value)}}
      onConfirm={()=>{seaech()}} 
      value={keyword} 
      confirmType="search" 
      className='search-bar' 
      type='text' 
      placeholder='请输入关键字' />
  </View>
}
// @type React Component | @dec 下拉标签过滤框
function FilterPanel() {
  const { setShowFilterPanel, gradeList, updateQuery, query, gradeStepList, subjectList, tagList } = useModel();
  return <View className='tag-pannel'>
    <View className='tag-bar flex-row-center'>
      <View className='tag-type'>
        分类
      </View>
      <ScrollView scrollX className='tag-scroll-view'>
        <View
          onClick={() => updateQuery({ gradeId: '' })}
          className={!query.gradeId ? 'tag_active' : 'tag'}>全部</View>
        {gradeList.map((item: Grade) => {
          return <View
            key={item.id}
            className={query.gradeId == item.id ? 'tag_active' : 'tag'}
            onClick={() => { updateQuery({ gradeId: item.id }) }}
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
          onClick={() => updateQuery({ gradeStepId: '' })}
          className={!query.gradeStepId ? 'tag_active' : 'tag'}>全部</View>
        {gradeStepList.filter((s: GradeStep) => s.gradeId == query.gradeId).map((item: GradeStep) => {
          return <View
            key={item.id}
            onClick={() => { updateQuery({ gradeStepId: item.id }) }}
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
        <View
          onClick={() => updateQuery({ subjectId: '' })}
          className={!query.subjectId ? 'tag_active' : 'tag'}>全部</View>
        {subjectList.map((item: Subject) => {
          return <View
            key={item.id}
            onClick={() => { updateQuery({ subjectId: item.id }) }}
            className={item.id == query.subjectId ? 'tag_active' : 'tag'}>
            {item.name}
          </View>
        })}
      </ScrollView>
    </View>
    <View className='tag-bar flex-row-center'>
      <View className='tag-type'>
        标签
      </View>
      <View
        onClick={() => updateQuery({ tagIds: [] })}
        className={(!query.tagIds || query.tagIds.length == 0) ? 'tag_active' : 'tag'}>全部</View>
      {tagList?.map((item: Tag) => {
        return <View
          key={item.id}
          onClick={() => {
            let newTags = [item.id].concat(query.tagIds ? query.tagIds.slice() : [])
            updateQuery({ tagIds: newTags })
          }}
          className={query.tagIds?.includes(item.id) ? 'tag_active' : 'tag'}>
          {item.name}
        </View>
      })}
    </View>
    <View className='flex-center'>
      <Image onClick={() => {
        setShowFilterPanel(false)
      }} className='icon_arrow_up p-20' src={icon_arrow_up}></Image>
    </View>
  </View>
}
function DropButtonPanel() {
  const model = useModel();
  const getItemClass = (item: SortType) => item && model.sort == item ? 'order-button color-333' : 'order-button'
  return <View className='filter-panel'>
    <View className='drop-button-panel'>
      <View
        onClick={() => { model.setSort(SortEnum.download) }}
        className={getItemClass(SortEnum.download)}>
        综合排序
        </View>
      <View
        onClick={() => { model.setSort(SortEnum.new) }}
        className={getItemClass(SortEnum.new)}>
        最新
        </View>
      <View
        onClick={() => { model.setSort(SortEnum.free) }}
        className={getItemClass(SortEnum.free)}>
        免费
        </View>
      <View
        onClick={() => { model.setShowFilterPanel(!model.showfilterPanel) }}
        className='drop-button'>
        筛选
      </View>
    </View>
    {model.showfilterPanel && <FilterPanel />}
  </View>
}
// @type Page | @dec 试卷列表
function PaperList() {
   
    const model = useModel();
    return <View className='paper-list'>
      {model.showfilterPanel && <View 
        onClick={()=>{model.setShowFilterPanel(false)}}
        className='list-dackdim'></View>}
      {model.list.map((item: Paper)=>{
        return <View key={item.id} className='paper-item flex-between'>
            <View className='flex-center'>
              <View className='paper-pic'> 
              </View>
              <View className='paper-info'> 
                  <View>{item.name}</View>
                  <View className='paper-info-dec flex-row-center'>
                      {/* <View className='paper-info-tag'>小学数学</View> */}
                      <View className='paper-dec-tag'>
                        <Text>{model.gradeOptionMap[item.gradeId]?.name}/</Text>
                        <Text>{model.gradeStepOptionMap[item.gradeStepId]?.name}/</Text>
                        <Text>{termType[item.term]}</Text>
                      </View>
                      <View className='paper-dec-tag'>{model.subjectOptionMap[item.subjectId]?.name}</View>
                  </View>
              </View>
            </View>
            <View className='paper-data'> 
                <View className='paper-price'>{item.price? <Text>¥{item.price} </Text>: <Text className='fz-30'>免费</Text>}</View>
                <View>{item.download}下载</View>
                <View>{item.pageView}浏览</View>
            </View>
          </View>
        })}
  </View>
}
// @type Page | @dec 主页面
function Index() {
  const model = useModel();
  return <View className='search-page page'>
    <View className='search-header'>
      <View className='navigationBar'>
        <View className='navigationBar-title flex-center'>
          资源中心
          </View>
        <SearchBar />
      </View>
      <DropButtonPanel />
    </View>
    <PaperList></PaperList>
  </View>
}


export default Index;

