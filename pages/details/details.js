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
    //  
    minusStatus: 'disabled', // 使用data数据对象设置样式名
    currentItem:'',
    organiObj:{}
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
  autoFun:function(id){
    var _this = this;
    app.phpRequst({
      action: "get_goods_info",
      verify: "123456",
      auth: "test",
      "params[goods_id]": id
    }, function (res) {
      _this.setData({
        organiObj: {
          ...res,
          saleNum: 1,
          select: "circle",
          product_id: res.products.length > 0 ? res.products[0].product_id :""
        },
        currentItem: res.products.length > 0 ? res.products[0].product_id : ""
      })
      console.log('详情页', _this.data.organiObj)
    })
  },
  AddCar: function () {
    var _this = this;
    var pd = wx.getStorageSync('shopCar');
    var obj = [];
    if (pd.length > 0) {//购物车非空
      // 判断产品ID
      obj = pd;
      var b = _this.data.organiObj.goods_id;//当前产品ID
      var c = { being: false, index: 0 };
      obj.forEach(function (value, index, array) {
        if (value.goods_id == b) {
          return c = { being: true, index: index };
        }
      })
      if (c.being) {//存在购物车--改
        obj[c.index].saleNum = _this.data.organiObj.saleNum;
        obj[c.index].product_id = _this.data.organiObj.product_id;
      } else {//不存在购物车--增
        obj.push(_this.data.organiObj);
      }
    } else {//购物车为空--追加
      obj.push(_this.data.organiObj)
    }
    wx.setStorage({
      key: "shopCar",
      data: obj,
      success: function (res) {
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 1500
        })
        console.log(wx.getStorageSync('shopCar'))
      },
      fail: function () {
        wx.showToast({
          title: '添加失败',
          icon: 'loading',
          duration: 1500
        })
      }
    })
    // app.getUserInfo(function (data) {
     
    // });
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.organiObj.saleNum;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.data.organiObj.saleNum = num;
    this.setData({
      organiObj: this.data.organiObj,
      minusStatus: minusStatus
    })
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.organiObj.saleNum;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.data.organiObj.saleNum = num;
    this.setData({
      organiObj: this.data.organiObj,
      minusStatus: minusStatus
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
  checkProductId:function(e){
    var _this = this
    var productId = e.currentTarget.dataset.id
    this.data.organiObj.product_id = productId;
    this.setData({
      organiObj: _this.data.organiObj,
      currentItem: productId
    })
    console.log(this.data.organiObj)
  },
  BuyNow: function () {
    var data = this.data.organiObj
    var checked = []
    checked = checked.concat(data)
    wx.setStorage({
      key: "payChecked",
      data: checked,
      success: function (res) {
        var url = "/pages/order/order";
        app.getUserInfo(function (data) {
          wx.navigateTo({
            url: url,
          })
        });
      }
    })
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.autoFun(options.id)
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