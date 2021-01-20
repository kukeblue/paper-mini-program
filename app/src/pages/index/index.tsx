import React from 'react'
import { Swiper, SwiperItem, View, Image, Text } from '@tarojs/components'
import icon_share  from '../../resource/icon/share.png'
import './index.less'

// @type React Function | @dec 轮播图组件
function PageSwiper() {
  return <Swiper
    className='page-swiper'
    indicatorColor='#999'
    indicatorActiveColor='#333'
    circular
    autoplay>
    <SwiperItem>
      <Image
        className='card bg-color-666'
        mode="widthFix"
        style='width:100%; height: 400px'
        src=''
      />
    </SwiperItem>
  </Swiper>
}

//@type Page | @dec 首页
function Index(props) {
  return <View className='page index-page'>
      {/* 轮播图 */}
      <PageSwiper/>
      <View className='page-content'>
          <View className='page-card entry flex-between'>
            <View className='entry-item flex-column-center'>
                <View className='entry-item-icon m-b-30'></View>
                <View className='fz-32 m-b-10'>搜试卷</View>
                <View className='fz-24 color-999'>试卷查找、下载、打印</View>
            </View>
            <View className='entry-item-line'></View>
            <View className='entry-item flex-column-center'>
                <View className='entry-item-icon m-b-30'></View>
                <View className='fz-32 m-b-10'>找资料</View>
                <View className='fz-24 color-999'>学习资料查询</View>
            </View>
          </View>
      </View>
      <View className='page-content'>
        <View className='user-integral page-card flex-between'>
            <View>
              <View className='fz-28'>我的积分<Text className='fz-40 m-l-20'>131</Text></View>
              <View className='fz-24 color-999'>分享得积分，海量资源下载</View>
              </View>
            <View>
                <Image className='share-icon' src={icon_share}/>
            </View>
        </View>
        
      </View>
      <View className='page-content flex-between'>
        <View className='goods-item page-card'>
          <View className='p-30'>
            <Text>精选试卷</Text>
            <View className='fz-24 color-999'>精选试卷集合</View>
          </View>
        </View>
        <View className='goods-item page-card'>
        <View className='p-30'>
            <Text>免费试卷</Text>
            <View className='fz-24 color-999'>免费试卷集合</View>
          </View>
        </View>
        <View className='goods-item page-card'>
          <View className='p-30'>
            <Text>精选资料</Text>
            <View className='fz-24 color-999'>精选资料集合</View>
          </View>
        </View>
      </View>
      <View className='page-content flex-between'>
        <View className='goods-item page-card'>
          <View className='p-30'>
            <Text>2021高考</Text>
            <View className='fz-24 color-999'>精选试卷集合</View>
          </View>
        </View>
        <View className='goods-item page-card'>
        <View className='p-30'>
            <Text>小升初</Text>
            <View className='fz-24 color-999'>免费试卷集合</View>
          </View>
        </View>
        <View className='goods-item page-card'>
          <View className='p-30'>
            <Text>人教版本</Text>
            <View className='fz-24 color-999'>精选资料集合</View>
          </View>
        </View>
      </View>
     
  </View>;
}

export default Index;

