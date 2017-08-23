// home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    //
    tabbars1:true,
    tabbars2:false,
    //
    productList:[{
      pic:"https://img.gegejia.com/activity/saleWindow/28a12cb9ba073.jpg",
      title:"中秋献礼",
      caption:"一口纯真 回归纯与真",
      price:"50.00",
      link:"01"
    },{
      pic: "https://img.gegejia.com/activity/saleWindow/22f507610bfff.jpg",
      title: "中秋献礼",
      caption: "一口纯真 回归纯与真",
      price: "50.00",
      link: "02"
    },{
      pic: "https://img.gegejia.com/activity/saleWindow/11e78044e54eb.jpg",
      title: "中秋献礼",
      caption: "一口纯真 回归纯与真",
      price: "50.00",
      link: "03"
    }, {
      pic: "https://img.gegejia.com/activity/saleWindow/11e8289e6b31c.jpg",
      title: "中秋献礼",
      caption: "一口纯真 回归纯与真",
      price: "50.00",
      link: "04"
    }, {
      pic: "https://img.gegejia.com/activity/saleWindow/11e855f79b11c.jpg",
      title: "中秋献礼",
      caption: "一口纯真 回归纯与真",
      price: "50.00",
      link: "05"
    }, {
      pic: "https://img.gegejia.com/activity/saleWindow/da13d446349.jpg",
      title: "中秋献礼",
      caption: "一口纯真 回归纯与真",
      price: "50.00",
      link: "06"
    }]
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
  scroll:function(e){
    // console.log(e)
  },
  searchScrollLower:function(){
    console.log("OK--到底部了")
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
  
  }
})