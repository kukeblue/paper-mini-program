export default {
  pages: [
    'pages/index/index',
    'pages/search/index',
    'pages/paper/index',
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
      iconPath: 'resource/tabbar/index.png',
      selectedIconPath: 'resource/tabbar/index_fill.png',
      pagePath: 'pages/index/index',
      text: '首页'
    },{
      iconPath: 'resource/tabbar/search.png',
      selectedIconPath: 'resource/tabbar/search_fill.png',
      pagePath: 'pages/search/index',
      text: '查询'
    },
    {
      iconPath: 'resource/tabbar/my.png',
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
