//app.js
App({
  data:{
    //jnApi: "http://www.ejniu.cn/WeiXService.asmx"
    jnApi: "https://www.jnxcx.vip/WeiXService.asmx",
    miApi:"http://111.231.78.214/api/wxmini.php"
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
  getwxlogin: function(cb) {
    var that = this
    if (this.globalData.wxlogin) {
      typeof cb == "function" && cb(this.globalData.wxlogin)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.wxlogin = res.userInfo
          typeof cb == "function" && cb(that.globalData.wxlogin)
        }
      })
    }
  },
  getCode:function(cd){
    if (typeof cd == "function") {
      wx.login({
        success: function (res) {
          cd(res.code) //返回code
        }
      })
    }
  },
  shoppingCar:function(that) {//购物车
    wx.setStorage({
      key: "shopCar",
      data: []
    })
  },
  getUserInfo: function(cd) {
    if (typeof cd == "function"){
      wx.getStorage({
        key: 'userInfo',
        success: function (res) {
          cd(res)
        },
        fail: function (res) {
          wx.navigateTo({
            url: '/pages/loginRegister/login/login'
          })
        }
      })
    }
  },
  globalData: {
    wxlogin: null
  },
  goPay:function(){
    
  },
  //小月
  postRequst:function(url,data,callback){
    var _this = this;
    wx.request({
      url: _this.data.jnApi + url,
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: "POST",
      success: function (res) {
        console.log("小月", res)
        if (res.data.return_code === 0) {
          if (typeof callback == "function") {
            callback(res.data)
          }
        } else {
          wx.showToast({
            title: res.errMsg
          })
        }
      },
      fail:function(res){
        console.log(res)
      }
    })
  },
  // 小米
  phpRequst: function (data, callback) {
    var _this = this;
    wx.request({
      url: _this.data.miApi,
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: "POST",
      success: function (res) {
        console.log("小米", res)
        if (res.data.result_code === "success") {
          if (typeof callback == "function") {
            callback(res.data.results)
          }
        } else {
          wx.showToast({
            title: res.data.msg
          })
        }
      },
      fail: function (res) {
        console.log(res)
      }
    })
  }
})
