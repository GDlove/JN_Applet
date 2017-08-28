// home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg',
      'https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg',
      'https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg'
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
      pic:"https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg",
      title:"健康生活首选",
      caption:"新西兰安佳牛奶",
      price:"50.00",
      link:"01"
    },{
        pic: "https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg",
        title: "健康生活首选",
        caption: "新西兰安佳牛奶",
      price: "50.00",
      link: "02"
    },{
        pic: "https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg",
        title: "健康生活首选",
        caption: "新西兰安佳牛奶",
      price: "50.00",
      link: "03"
    }, {
        pic: "https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg",
        title: "健康生活首选",
        caption: "新西兰安佳牛奶",
      price: "50.00",
      link: "04"
    }, {
        pic: "https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg",
        title: "健康生活首选",
        caption: "新西兰安佳牛奶",
      price: "50.00",
      link: "05"
    }, {
        pic: "https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg",
        title: "健康生活首选",
        caption: "新西兰安佳牛奶",
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