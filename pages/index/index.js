//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    wxImgs: ['https://www.aicoder.com/public/assets/aicoder1.jpg']
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotoNewslist: function() {
    // wx.navigateTo({
    //   url: '../news/newslist',
    // })
    wx.switchTab({
      url: '/pages/news/newslist'
    })
  },
  showLaomaCode: function() {
    wx.previewImage({
      current: this.data.wxImgs[0],
      urls: this.data.wxImgs, // 需要预览的图片http链接列表
      complete: function() {
        console.log('complete')
      },
      fail: function() {
        console.log('f')
      }
    })
  },
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  gotoAicoder: function( ) {
  },
  bm: function(e) {
    wx.setStorageSync('bm_type', 'bm');
    wx.switchTab({
      url: '/pages/bm/bm'
    });
  },
  join: function() {
    wx.setStorageSync('bm_type', 'join');
    wx.switchTab({
      url: '/pages/bm/bm'
    });
  }
})
