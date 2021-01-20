import React from 'react'
import { View, Image } from '@tarojs/components'
import './index.less'

function Index(props) {
  return <View className='my-page'>
      <View className='flex-center'>
        <Image
          className='card bg-color-666'
          mode="widthFix"
          style='width:100%; height: 200px'
          src=''
        />
      </View>
  </View>;
}

export default Index;

