// details.js
var app = getApp()
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
    minusStatus: 'disabled', // 使用data数据对象设置样式名
    organiObj:{
      productId: "01",
      title: "牛奶",
      salePrice: "30.00",
      originalPrice: "50.00",
      saleNum: 1,
      productImg: "https://gw3.alicdn.com/bao/uploaded/i2/2091321182/TB1JKx7SVXXXXaraXXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg"
    }
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
        //转发成功
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
    var pd = wx.getStorageSync('shopCar');
    var obj = [];
    if(pd.length > 0){//购物车非空
      // 判断产品ID
      obj = JSON.parse(pd);
      var b = this.data.organiObj.productId;//当前产品ID
      var c = {being:false,index:0};
      obj.forEach(function (value, index, array){
        if (value.productId == b) {
          return c = { being: true, index: index };
        }
      })
      if (c.being) {//存在购物车--改
          obj[c.index].saleNum = this.data.organiObj.saleNum;
      } else {//不存在购物车--增
        obj.push(this.data.organiObj);
      }
    }else{//购物车为空--追加
      obj.push(this.data.organiObj)
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

    this.data.organiObj.saleNum = num;
    this.setData({
      organiObj: this.data.organiObj
    })
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

    this.data.organiObj.saleNum = num;
    this.setData({
      organiObj: this.data.organiObj
    })
  },
  goHome:function(){
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  goCar: function () {
    wx.switchTab({
      url: '/pages/shoppingCar/shoppingCar',
    })
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