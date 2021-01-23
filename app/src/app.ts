import { Component } from 'react'
import './app.less'
import Taro from '@tarojs/taro'
class App extends Component {
  componentDidMount() { }

  async componentDidShow() {
    await Taro.getStorage({
      key: "user",
      success: () => {
        console.log("user exist")
        Taro.navigateTo({
          url: 'pages/my/index'
        })
      },
      fail: async () => {
        console.log("user not exist")
        await Taro.login({
          success: async function (res) {
            if (res.code) {
              console.log('code: ' + res.code);
              await Taro.request({
                url: "http://localhost:8080/api/wxUser/login",
                data: {
                  code: res.code
                },
                success: async (res) => {
                  console.log(res)
                  if (res.data['status'] == 0) {
                    await Taro.setStorage({
                      key: 'user',
                      data: res['result'],
                      success: () => {
                        console.log('存储用户成功')
                      }
                    })
                  }
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }
    });
  }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
