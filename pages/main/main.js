// pages/main/main.js
Page({
  shiping(){
    wx.switchTab({
      url: '/pages/shiping/shiping',
    })
  },
  xiaoshuo() {
    wx.switchTab({
      url: '/pages/xiaoshuo/xiaoshuo',
    })
  },
  juyiting() {
    wx.switchTab({
      url: '/pages/juyiting/juyiting',
    })
  },
  btn(e){
    wx.setStorage({
      key: 'key',
      data: e.target.dataset.name,
    })
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'http://localhost:3000/main',
      success: (res) => {
        this.setData({
          list: res.data
        })
      }
    })
    wx.request({
      url: 'http://localhost:3000/swiper',
      success: (res) => {
        this.setData({
          imgUrls: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})