// pages/bm/bm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    phone: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  phone: function(e) {
    this.setData({phone: e.detail.value});
  },
  name: function(e) {
    this.setData({ name: e.detail.value});
  },
  sub: function() {
    var that = this;
    //  wx.showModal({
    //    title: 'ss',
    //    content: this.data.name + this.data.phone + wx.getStorageSync('bm_type'),
    //  });
    if(!(this.data.phone && this.data.name)) {
      wx.showToast({
        title: '请输入正确数据！',
        mask: true,
        image: "/imgs/user.png",
        icon: "loading"
      });
      return;
    }
    var level = 1;
    if(wx.getStorageSync('bm_type') === "join") {
      level = 20;
    }
    wx.request({
      url: 'https://hamkd.com/api/bm',
      data: {
        Name: that.data.name,
        Phone: that.data.phone,
        Level: level
      },
      method: "POST",
      success: function(data) {
        wx.showToast({
          title: '提交成功',
          icon: "success",
          complete: function() {
            setTimeout(()=>{
              wx.switchTab({
                url: '/pages/index/index'
              });
            }, 1500);
          }
        });
      },
      fail: function() {
        wx.showToast({
          title: '提交失败请重试',
          icon: "loading"
        })
      }
    })
  }
})