import React from 'react'
import { Swiper, SwiperItem, View, Image } from '@tarojs/components'
import './index.less'
import banner_1 from '../../resource/banner/1.png'
import banner_2 from '../../resource/banner/2.png'


function Index(props) {
  return <View className='index'>
    <Swiper
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <Image
            mode="widthFix"
            style='width:100%;'
            src={banner_1}
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            mode="widthFix"
            style='width:100%;'
            src={banner_2}
          />
        </SwiperItem>
      </Swiper>
  </View>;
}

export default Index;

