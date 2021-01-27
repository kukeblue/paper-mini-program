import React from 'react'
import { View, Image, Text, Icon } from '@tarojs/components'
import './index.less'
import avatar from '../../resource/icon/avatar.jpg'
// import calendar from '../../resource/icon/calendar.png'
// import crown from '../../resource/icon/crown.png'
// import right from '../../resource/icon/right.png'

function IconColumn(src, message) {
  return <View className="flex-column-between">
    <Image className="icon" src=''></Image>
    <Text className="fz-30 color-999 m-t-10">信息</Text>
  </View>
}

function Index(props) {
  return <View className='my-page page'>
    <View className="user-card">
      <View className="user-info">
        <Image
          className="avatar"
          src={avatar}
        />
        <Text className="fz-36">从心</Text>
      </View>
      <View className="clock-in">
        <Image
          className="calendar"
          src=''
        />
        <Text className="fz-32">打卡</Text>
      </View>
    </View>
    <View className='page-content my-card '>
      <View className='flex-between'>
        <View className="flex-row-between">
          <Image className='icon' src='' />
          <View className='fz-35 m-l-20'>我的VIP</View>
        </View>
        <View>
          <View className="flex-row-between">
            <Text className="fz-32">剩余6天</Text>
            <Image
              className="icon m-l-5"
              src=''
            />
          </View>
        </View>
      </View>
    </View>
    <View className="page-content my-card">
      <View className=' flex-between'>
        <IconColumn></IconColumn>
        <IconColumn></IconColumn>
        <IconColumn></IconColumn>
        <IconColumn></IconColumn>
        <IconColumn></IconColumn>
      </View>
    </View>
  </View>
}

export default Index;

