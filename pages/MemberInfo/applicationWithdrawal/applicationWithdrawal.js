var app = getApp();
// applicationWithdrawal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'GDL',
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
  formSubmit:function(e){
    console.log('提现数据为：', e.detail.value)
    var userInfo = wx.getStorageSync('userInfo');
    app.postRequst('/MemberBeCash', { memberId: userInfo[0].MemerID, flowMoney: e.detail.value.applicatMoney}, function (res) {
      console.log('提现申请', res)
    })
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