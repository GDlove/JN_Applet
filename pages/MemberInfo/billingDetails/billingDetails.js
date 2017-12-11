// pages/MemberInfo/billingDetails/billingDetails.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    memberID: 0,
    type: 0,
    startIndex: 1,
    evetType: 103, 
    tabbars: 1,
    srollHeight: 0,
    ListItem: []
  },
  tabbars1Fn: function () {
    //商品销售
    this.setData({
      type: 0,
      startIndex: 1,
      evetType: 103,
      tabbars: 1,
    })
    this.autoFn()
  },
  tabbars2Fn: function () {
    //业务奖金
    this.setData({
      type: 0,
      startIndex: 1,
      evetType: 1,
      tabbars: 2,
    })
    this.autoFn()
  },
  tabbars3Fn: function () {
    //金币余额
    this.setData({
      type: 1,
      startIndex: 1,
      evetType: 0,
      tabbars: 3,
    })
    this.autoFn()
  },
  tabbars4Fn: function () {
    //积分余额
    this.setData({
      type: 2,
      startIndex: 1,
      evetType: 0,
      tabbars: 4,
    })
    this.autoFn()
  },
  lower: function (e) {
    console.log(e)
  },
  autoFn:function(){
    var data = {
      memberId: this.data.memberID,
      type: this.data.type,
      evetType:this.data.evetType,
      startIndex: this.data.startIndex,
      endIndex: this.data.startIndex + 1,
    }
    app.postRequst('/AccountShopListPage', { 
        ...data
      }, function (res) {
        console.log('账单明细', res)
      // _this.setData({
      // })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = wx.getStorageSync('userInfo')[0];
    this.setData({
      memberID: userInfo.MemerID,
    })
    this.autoFn()
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
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        var height = res.windowHeight - 60;
        that.setData({
          srollHeight: height
        });
      }
    })
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