// register.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    getUserAcoount:false,
    perNo:'',
    returnCode:''
  },
  formSubmit: function (e) {//开通会员
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    app.postRequst('/RegistMember', {
      ...e.detail.value,
      memType:1,
      refereAccount:'311888'
    }, function (res) {
        console.log('账号注册', res)
    })
  },
  setperNo:function(e){
    this.setData({
      perNo: e.detail.value
    })
  },
  postUserAccount:function(){//获取code
    var _this = this
    var code = this.data.perNo
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(code) === false) {
      wx.showModal({
        title: '提示',
        content: '请正确填写身份证号码',
        showCancel: false,
        success: function (res) {
          //
        }
      })
      return false;
    }else{
      app.postRequst('/GetName', {
        code: code,
        type: 1
      }, function (res) {
        _this.setData({
          returnCode: res.results[0].userAccount
        })
      })
    }
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