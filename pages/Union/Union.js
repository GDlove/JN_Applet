// Union.js
Page({
  onPullDownRefresh: function () {
    console.log('--------下拉刷新-------')
    wx.showNavigationBarLoading() //在标题栏中显示加载  
    setTimeout(function () {
      wx.stopPullDownRefresh() //停止下拉刷新  
      wx.hideNavigationBarLoading()
      console.log('--------停止刷新-------')
    }, 2000)
  },
  /**
   * 页面的初始数据
   */
  data: {
    unionBg:"http://chuantu.biz/t6/19/1503567730x2728278560.png",
    //
    tabbars1: true,
    tabbars2: false,
    //
    businessList: [{
      pic: "../../images/zhaoyun.png",
      title: "赵云",
      labels: ["突进", "打野","收割"],
      viewMap: "查看战绩", 
      location: { latitude: 119.99, longitude: 31.81}
    }, {
      pic: "../../images/zhaoyun.png",
      title: "赵云",
      labels: ["突进", "打野", "收割"],
      viewMap: "查看战绩",
      location: { latitude: 117.204551, longitude: 39.106866 }
      }, {
        pic: "../../images/zhaoyun.png",
        title: "赵云",
        labels: ["突进", "打野", "收割"],
        viewMap: "查看战绩", 
        location: { latitude: 122.121229, longitude: 37.530693 }
    }, {
      pic: "../../images/zhaoyun.png",
      title: "赵云",
      labels: ["突进", "打野", "收割"],
      viewMap: "查看战绩",
      location: { latitude: 117.291938, longitude: 34.218636 }
      }, {
        pic: "../../images/zhaoyun.png",
        title: "赵云",
        labels: ["突进", "打野", "收割"],
        viewMap: "查看战绩",
        location: { latitude: 119.982543, longitude: 31.832153 }
      }]
  },
  tabbars1Fn: function () {
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
  viewMapLocal: function (event){
    var position = event.currentTarget.dataset.location;
    var latitude = position.longitude;//纬度
    var longitude = position.latitude;//经度
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: 28,
      complete:function(e){
        //
      }
    })
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