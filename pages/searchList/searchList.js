// searchList.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList:[{
      id:"1",
      thumb:"https://gw3.alicdn.com/bao/uploaded/i2/2091321182/TB1JKx7SVXXXXaraXXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg",
      name:"简易鞋架子多层防尘实木楠竹收纳经济型家用宿舍组装寝室客厅鞋柜",
      shop_price:"50",
      market_price:"80",
      buyNumber:"118"
    }],
    fixed:false,
    tabbars1:true,
    tabbars2:false,
    tabbars3:false
  },
  tabbars1Fn:function(){
    this.setData({
      tabbars1: true,
      tabbars2: false,
      tabbars3: false
    })
  },
  tabbars2Fn: function () {
    this.setData({
      tabbars1: false,
      tabbars2: true,
      tabbars3: false,
      searchList: []
    })
    var data = {
      sort_by: 'sale'
    }
    this.autoFun(data)
  },
  tabbars3Fn: function () {
    this.setData({
      tabbars1: false,
      tabbars2: false,
      tabbars3: true,
      searchList: []
    })
    var data = {
      sort_by: 'price'
    }
    this.autoFun(data)
  },
  autoFun:function(data){
    var _this = this;
    app.phpRequst({
      action: "get_goods_list",
      verify: "123456",
      auth: "test",
      "params[page_num]": 1,
      "params[page_size]": 20,
      "params[sort_by]": data.sort_by,
      "params[sort_order]": "asc"
      // params: { 
      //   page_num:1,//页数	
      // 	 page_size:20,//	每页多少行	
      //   sort_by: '',//	排序字段 1:sale 销量 2:price	售价
      //   sort_order: ''//	排序 1:asc 升序 2:desc	降序
      // }
    }, function (res) {
      console.log('新品推荐', res)
      _this.setData({
        searchList: _this.data.searchList.concat(res.goods)
      })
    })
  },
  scroll: function (e) {
    console.log(e.detail.scrollTop)
    if (e.detail.scrollTop > 50){
      this.setData({
        fixed: true
      })
    }else{
      this.setData({
        fixed: false
      })
    }
  },
  searchScrollLower: function () {
    console.log("OK--到底部了")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = {
      sort_by:'sale'
    }
    this.autoFun(data)
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