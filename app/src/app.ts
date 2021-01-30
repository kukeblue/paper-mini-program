import { Component } from 'react'
import './app.less'
import Taro from '@tarojs/taro'
import request, { RequestExtraData } from './utils/request';

class App extends Component {
  async componentDidMount() {
    const loginRes = await Taro.login()
    console.log('小程序端获取code', loginRes);
    if(loginRes && loginRes.code) {
      const res = await request({url: `/wx/login?code=${loginRes.code}`})
      if(res?.status == 0) {
          RequestExtraData.Auth = res.result.token
      }else {
        console.error('ERROE: 小程序登录失败')
      }
    }
  }

  async componentDidShow() {
    
  }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
