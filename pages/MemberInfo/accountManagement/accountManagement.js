var app = getApp();
// accountManagement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    array: ['男', '女'],
    username: "周杰伦",
    address: "江苏省常州市新北区 太湖东路 软件园 9-4 2001",
    telNumber: "15295067572",
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  toNativeAddress: function () {
    var that = this;
    wx.chooseAddress({
      success: function (res) {
        that.setData({
          username: res.userName,
          telNumber: res.telNumber,
          address: res.provinceName + res.cityName + res.countyName
        })
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)
      }
    })
  },
  formSubmit:function(e){
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var userInfo = wx.getStorageSync('userInfo');
    app.postRequst('/UpdateMemberAccount', { memberId: userInfo[0].MemerID, BanName: '开户行', AccountNo:"银行帐号" }, function (res) {
      console.log('账号修改', res)
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