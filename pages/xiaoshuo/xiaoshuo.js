// pages/xiaoshuo/xiaoshuo.js
Page({
  btn(e){
    this.setData({
      main : e.target.dataset.ckey
    })
    wx.navigateTo({
      url: '/pages/xiaoshuos/xiaoshuos?name='+ this.data.main,
    })
    console.log(e.target.dataset.ckey)
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    main:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://yuedu.sogou.com/ajax/book/info/1315F1BEFE2FE9D5B0AB3A582856259F?bkey=1315F1BEFE2FE9D5B0AB3A582856259F&_=1559032160738',
      success:(res)=>{
        this.setData({
          list: res.data.dir.chapters
        })
        console.log(res.data.dir.chapters)
      }
    })
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

  }
})