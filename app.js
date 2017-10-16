//app.js
App({
  data:{
    jnApi:"http://www.ejniu.cn/WeiXService.asmx"
  },
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // wx.login({
    //   success: function (res) {//接口调用成功
    //     console.log(res)
    //   },
    //   fail:function(){//接口调用失败

    //   },
    //   complete:function(){//结束的回调函数
    //     console.log("complete")
    //   }
    // });
  },
  // getUserInfo: function(cb) {
  //   var that = this
  //   if (this.globalData.userInfo) {
  //     typeof cb == "function" && cb(this.globalData.userInfo)
  //   } else {
  //     //调用登录接口
  //     wx.getUserInfo({
  //       withCredentials: false,
  //       success: function(res) {
  //         that.globalData.userInfo = res.userInfo
  //         typeof cb == "function" && cb(that.globalData.userInfo)
  //       }
  //     })
  //   }
  // },
  shoppingCar:function(that) {//购物车
    wx.setStorage({
      key: "shopCar",
      data: []
    })
  },
  getUserInfo: function() {
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        wx.navigateTo({
          url: '/pages/loginRegister/login/login'
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
