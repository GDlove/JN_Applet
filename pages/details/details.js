// details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg',
      'https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg',
      'https://img.gegejia.com/activity/saleWindow/2e53490d15f87.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    //
    pic_list:[
      'https://img.gegejia.com/product/22f38b3ee43c5.jpg!v1detail',
      'https://img.gegejia.com/product/28a2bc469550f.jpg!v1detail',
      'https://img.gegejia.com/product/d865112783b.jpg!v1detail'
    ],
    product_info:{
      title:"我是商品名",
      name:"商品价格",
      price:"310.00",
      stock:"100个",
      weight:"900g",
      instruction:"补水就用水密码水力全开,唤醒”肤”君过七夕！水密码护肤品全场满199减100，肌不可失，为爱下单吧！【补水就用水密码】水力全开,唤醒”肤”君过七夕！水密码护肤品全场满199减100，肌不可失，为爱下单吧！"
    },
    //
    num: 1, // input默认是1   
    minusStatus: 'disabled' // 使用data数据对象设置样式名
  },
  onShareAppMessage :function(res){
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '我是自定义转发标题',
      path: 'pages/details/details',
      imageUrl:'http://overwatch.nos.netease.com/1/assets/images/hero/doomfist/icon-portrait.png',
      success: function (res) {
        //s 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  BuyNow:function(){
    wx.navigateTo({
      // url:"../loginRegister/login/login"
      url:"/pages/order/order"
    })
  },
  AddCar: function () {
    var pd = wx.getStorageSync('shopCar')
    if(!pd){
      // 创建
      var obj = [{
        productId:"123",
        title: "我是商品名",
        salePrice: "30.00",
        originalPrice: "50.00",
        saleNum: this.data.num,
        productImg: ""
      }]
    }else{
      // 追加
      var obj = JSON.parse(pd);
      var shopObj = {
        title: "我是商品名",
        salePrice: "30.00",
        originalPrice: "50.00",
        saleNum: this.data.num,
        productImg: ""
      }
      obj.push(shopObj)
    }
    wx.setStorage({
      key: "shopCar",
      data: JSON.stringify(obj)
    })
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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