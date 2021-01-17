export default {
  pages: [
    'pages/index/index',
    'pages/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      iconPath: 'resource/index.png',
      selectedIconPath: 'resource/tabbar/index_fill.png',
      pagePath: 'pages/index/index',
      text: '首页'
    },
    {
      iconPath: 'resource/my.png',
      selectedIconPath: 'resource/tabbar/my_fill.png',
      pagePath: 'pages/my/index',
      text: '我的'
    }],
    'color': '#bfbfbf',
    'selectedColor': '#fedd2e',
    'backgroundColor': '#fff',
    'borderStyle': 'black'
  },
}
