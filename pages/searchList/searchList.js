// searchList.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList:[],
    fixed:false,
    tabbars1:true,
    tabbars2:false,
    tabbars3:false,
    isnew:0,
    pageIndex:1,
    isLoad:true,
    sort_by:"",
    key:"",
    loadingM:true
  },
  tabbars1Fn:function(){
    this.setData({
      tabbars1: true,
      tabbars2: false,
      tabbars3: false,
      searchList: [],
      sort_by: "",
      pageIndex: 1
    })
    this.autoFun()
  },
  tabbars2Fn: function () {
    this.setData({
      tabbars1: false,
      tabbars2: true,
      tabbars3: false,
      searchList: [],
      pageIndex: 1,
      sort_by: 'sale'
    })
    this.autoFun()
  },
  tabbars3Fn: function () {
    this.setData({
      tabbars1: false,
      tabbars2: false,
      tabbars3: true,
      searchList: [],
      pageIndex: 1,
      sort_by: 'price'
    })
    this.autoFun()
  },
  autoFun:function(){
    var _this = this;
    app.phpRequst({
      action: "get_goods_list",
      verify: "123456",
      auth: "test",
      "params[page_num]": this.data.pageIndex,//页数
      "params[page_size]": 5,//	每页多少行	
      "params[sort_by]": this.data.sort_by,//	排序字段 1:sale 销量 2:price	售价
      "params[sort_order]": "asc",//	排序 1:asc 升序 2:desc	降序
      "params[is_new]": this.data.isnew,
      "params[key]":this.data.key
    }, function (res) {
      console.log(_this.data.isnew,res)
      if (res.goods.length == 0) {
        _this.setData({
          isLoad: false
        })
      }else{
        _this.setData({
          searchList: _this.data.searchList.concat(res.goods)
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.code == "isnew"){//新品推荐
      this.setData({
        isnew:1
      })
    }
    if (options.key){
      this.setData({
        key: options.key
      })
    }
    var data = {
      sort_by: 'sale'
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
  onPageScroll: function (e) {
    if (e.scrollTop > 50) {
      this.setData({
        fixed: true
      })
    } else {
      this.setData({
        fixed: false
      })
    }
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
    console.log("滚到底了");
    if (this.data.isLoad) {
      this.setData({
        pageIndex: ++ this.data.pageIndex
      })
      this.autoFun()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})