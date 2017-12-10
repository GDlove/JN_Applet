// pages/MemberInfo/billingDetails/billingDetails.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabbars1: true,
    tabbars2: false,
    tabbars3: false,
    tabbars4: false,
    srollHeight: 300,
    ListItem: [{
      ID: "1",
      Name: "大黄",
      recommendName: "丐帮",
      Time: "2017-08-25"
    }, {
      ID: "2",
      Name: "大红",
      recommendName: "青城",
      Time: "2017-08-24"
    }, {
      ID: "3",
      Name: "大橙",
      recommendName: "少林",
      Time: "2017-08-23"
    }, {
      ID: "4",
      Name: "大绿",
      recommendName: "武当",
      Time: "2017-08-22"
    }, {
      ID: "5",
      Name: "大蓝",
      recommendName: "峨眉",
      Time: "2017-08-21"
    }, {
      ID: "6",
      Name: "大紫",
      recommendName: "蜀山",
      Time: "2017-08-20"
    }]
  },
  tabbars1Fn: function () {
    //商品销售
    this.setData({
      tabbars1: true,
      tabbars2: false,
      tabbars3: false,
      tabbars4: false
    })
    var data = {
      type: 0,//（0 商品销售，业务奖金，1 金币余额 2 积分余额）
      startIndex: 1,
      endIndex: 2,
      evetType: 103 //只有调用商品销售时evetType= 103，其他情况evetType= 0
    }
    this.autoFn(data)
  },
  tabbars2Fn: function () {
    //业务奖金
    this.setData({
      tabbars1: false,
      tabbars2: true,
      tabbars3: false,
      tabbars4: false
    })
    var data = {
      type: 0,//（0 商品销售，业务奖金，1 金币余额 2 积分余额）
      startIndex: 1,
      endIndex: 2,
      evetType: 0 //只有调用商品销售时evetType= 103，其他情况evetType= 0
    }
    this.autoFn(data)
  },
  tabbars3Fn: function () {
    //金币余额
    this.setData({
      tabbars1: false,
      tabbars2: false,
      tabbars3: true,
      tabbars4: false
    })
    var data = {
      type: 1,//（0 商品销售，业务奖金，1 金币余额 2 积分余额）
      startIndex: 1,
      endIndex: 2,
      evetType: 0 //只有调用商品销售时evetType= 103，其他情况evetType= 0
    }
    this.autoFn(data)
  },
  tabbars4Fn: function () {
    //积分余额
    this.setData({
      tabbars1: false,
      tabbars2: false,
      tabbars3: false,
      tabbars4: true
    })
    var data = {
      type: 2,//（0 商品销售，业务奖金，1 金币余额 2 积分余额）
      startIndex: 1,
      endIndex: 2,
      evetType: 0 //只有调用商品销售时evetType= 103，其他情况evetType= 0
    }
    this.autoFn(data)
  },
  scroll: function (e) {
    console.log(e)
  },
  autoFn:function(data){
    var userInfo = wx.getStorageSync('userInfo');
    app.postRequst('/AccountShopListPage', { 
        memberId: userInfo[0].MemerID,
        ...data
      }, function (res) {
      console.log('账单明细', res)
      _this.setData({
       
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = {
      type:0,//（0 商品销售，业务奖金，1 金币余额 2 积分余额）
      startIndex:1,
      endIndex:2,
      evetType:103 //只有调用商品销售时evetType= 103，其他情况evetType= 0
    }
    this.autoFn(data)
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