// pages/shiping/shiping.js
Page({
  btn(e) {
    wx.setStorage({
      key: 'sp',
      data: e.target.dataset.name,
    })
    wx.navigateTo({
      url: '/pages/shipingdetail/shipingdetail',
    })
  },
  input(e) {
    this.setData({
      name: e.detail.value
    })
    wx.request({
      url: 'http://v.juhe.cn/movie/index?key=cdbdc8e063fe8cd63529f8953a3c01ec&title=' + this.data.name,
      success: (res) => {
        this.setData({
          list: res.data.result
        })
        console.log(res.data.result)
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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