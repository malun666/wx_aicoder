// pages/news/newslist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsListUrl: 'https://hamkd.com/api/newslist',
    cur: 0,
    newsList: [],
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadNewData();
  },

  scrollLower: function() {
    this.loadNewData();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.loadNewData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadNewData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  loadNewData: function() {
    var that = this;
    wx.showLoading({
      title: '正在加载后台数据中.....',
    })
    wx.request({
      url: this.data.newsListUrl + '?page='+ (that.data.cur + 1),
      method: 'GET',
      success: function (res) {
        if(res.data.data.newsList.length > 0) {
          that.setData({cur: that.cur + 1});
          let newsList = [...that.data.newsList, ...res.data.data.newsList];
          let newData = Object.assign({}, res.data.data, { newsList: newsList});
          that.setData(newData);
          wx.setStorage({
            key: 'newsList',
            data: newsList,
          });
        }
        wx.hideLoading();
      }
    })
  },
  saveNewsList: function(newsList) {

  }
})