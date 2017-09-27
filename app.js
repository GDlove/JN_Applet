//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.login({
      success: function (res) {//接口调用成功
        console.log(res)
        // if (res.code) {
        //   //发起网络请求
        //   debugger
        //   wx.request({
        //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
        //     data: {
        //       appid: 'wx8ae7c05ab7ec43a5',
        //       secret: '439e81c9adea917303f5d9b483baa8e4',
        //       js_code: res.code,
        //       grant_type: 'authorization_code',              
        //     },
        //     header: {
        //       'content-type': 'application/json'
        //     },
        //     success:function(res){
        //       console.log(res)
        //     }
        //   })
        // } else {
        //   console.log('获取用户登录态失败！' + res.errMsg)
        // }
      },
      fail:function(){//接口调用失败

      },
      complete:function(){//结束的回调函数
        console.log("complete")
      }
    });
  },
  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },
  countdown:function(that) {
    // var second = that.data.clock;
    // if(second == 0) {
    //   that.setData({
    //     clock: "订单已过期"
    //   });
    //   return;
    // }
    // var time = setTimeout(function () {
    //   second--;
    //   that.setData({
    //     clock: second
    //   });
    //   countdown(that)
    // }, 1000)
    var a = 1;
    if(a!=0){
      setTimeout(function () {
        console.log(a++)
      }, 1000)
    }
  },
  globalData: {
    userInfo: null
  }
})
