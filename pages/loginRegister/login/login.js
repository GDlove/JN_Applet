// login.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phoneValue:"",
    passwordValue:"",
    defaultSize: 'default',
    disabled: false,
    loading: false
  },
  phoneNumber:function(e){
    this.setData({
      phoneValue: e.detail.value
    })
  },
  passwordNumber: function (e) {
    this.setData({
      passwordValue: e.detail.value
    })
  },
  loginSubmit: function (e) {
    var _this = this;
    if (e.detail.value.phoneNumber == '') {
      wx.showToast({
        title: '请输入手机号！'
      })
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(e.detail.value.phoneNumber)) {
      wx.showToast({
        title: '手机号有误！'
      })
      return false;
    }
    if (e.detail.value.passwordNumber.length == '') {
      wx.showToast({
        title: '请输入密码！'
      })
      return false;
    }
    _this.setData({
      loading:true,
      disabled:true
    })
    //请求登陆接口;
    wx.request({
      url: app.data.jnApi + '/UserLogin',
      data: {
        userAccount: e.detail.value.phoneNumber,
        password: e.detail.value.passwordNumber
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: "POST",
      success: function (res) {
        console.log(res.data)
        if(res.data.return_code === 0){
          _this.setData({
            loading: false,
            disabled: false
          });
          //存储用户信息
          wx.setStorage({
            key: "userInfo",
            data: res.data.results
          })
          setTimeout(function(){
            wx.navigateBack();
          },1500)
        }else{
          _this.setData({
            loading: false,
            disabled: false
          });
          wx.showToast({
            title: res.data.error_msg
          })
        }
      }
    })
    // console.log('form发生了submit事件，携带数据为：', e.detail.value)
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