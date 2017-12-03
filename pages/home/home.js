// home.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      // 'https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg',
      // 'https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg',
      // 'https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    //
    tabbars1:true,
    tabbars2:false,
    //
    loadmore:"为您推荐",
    //
    productList:[]
  },
  /**
   * 自定义函数
   */
  tabbars1Fn:function(){
    //更新数据
    this.setData({
      tabbars1: true,
      tabbars2: false
    })
  },
  tabbars2Fn: function () {
    //更新数据
    this.setData({
      tabbars1: false,
      tabbars2: true
    })
  },
  onPageScroll:function(e){
    console.log(e.scrollTop)
  },
  autofun:function(){
    var _this = this;
    app.phpRequst({
      action:"get_index_info",
      verify:"123456",
      auth:"test",
      params:""
    }, function (res) {
      console.log('首页信息', res)
      _this.setData({
        imgUrls: res.slider_list,
        productList: res.goods_list
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.autofun()
    console.log("666")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    app.shoppingCar();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // wx.request({
    //   url: "http://111.231.78.214/czjn/api/wxmini.php",
    //   data: { action: get_index_info, verify:'',},
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded' // 默认值
    //   },
    //   method: "POST",
    //   success: function (res) {
    //     debugger
    //   }
    // })
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
    wx.showNavigationBarLoading()
    console.log('刷新');
    setTimeout(function(){
      wx.hideNavigationBarLoading()
    },3000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("滚到底了");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})