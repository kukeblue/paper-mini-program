import React from 'react'
import { View, Image, Text, Icon } from '@tarojs/components'
import './index.less'
import avatar from '../../resource/icon/avatar.jpg'

// function IconColumn(src, message) {
//   return <View className="flex-column-between">
//     <Image className="icon" src=''></Image>
//     <Text className="fz-30 color-999 m-t-10">信息</Text>
//   </View>
// }

function Index(props) {
  return <View className='my-page page'>
    <View className="user-card">
      <View className="user-info">
        <Image
          className="avatar"
          src={avatar}
        />
        <Text className="fz-36 color-333">从心</Text>
      </View>
    </View>
  </View>
}

export default Index;

