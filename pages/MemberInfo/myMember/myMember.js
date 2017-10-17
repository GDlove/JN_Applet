// myMember.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbars1: true,
    tabbars2: false,
    tabbars3: false,
    MemerID:0,
    pageIndex:1,
    ListItem:[{
        ID:"1",
        Name:"大黄",
        recommendName:"丐帮",
        Time:"2017-08-25"
    }, {
      ID: "2",
      Name: "大红",
      recommendName: "青城",
      Time: "2017-08-24"
      }, {
        ID: "3",
        Name: "大橙",
        recommendName: "少林",
        Time: "2017-08-23"
    }, {
      ID: "4",
      Name: "大绿",
      recommendName: "武当",
      Time: "2017-08-22"
      }, {
        ID: "5",
        Name: "大蓝",
        recommendName: "峨眉",
        Time: "2017-08-21"
    }, {
      ID: "6",
      Name: "大紫",
      recommendName: "蜀山",
      Time: "2017-08-20"
    }]
  },
  tabbars1Fn: function () {
    //更新数据
    this.setData({
      tabbars1: true,
      tabbars2: false,
      tabbars3: false
    });
    this.ChildByLevel(2)
  },
  tabbars2Fn: function () {
    //更新数据
    this.setData({
      tabbars1: false,
      tabbars2: true,
      tabbars3: false
    })
    this.ChildByLevel(3)
  },
  tabbars3Fn: function () {
    //更新数据
    this.setData({
      tabbars1: false,
      tabbars2: false,
      tabbars3: true
    })
    this.ChildByLevel(4)
  },
  scroll: function (e) {
    // console.log(e)
  },
  ChildByLevel:function(level){
    var reqObj = {
      memberId: this.data.MemerID,
      level: level,
      startIndex: this.data.pageIndex,
      endIndex: ''
    }
    console.log(reqObj)
    // wx.request({
    //   url: app.data.jnApi + '/GetMemberChildByLevel',
    //   data: {
    //     memberId: '',
    //     level: '',
    //     startIndex: '',
    //     endIndex: ''
    //   },
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded' // 默认值
    //   },
    //   method: "POST",
    //   success: function (res) {
    //     console.log(res.data)
    //     if (res.data.return_code === 0) {
    //       console.log(res.data.results)
    //     } else {
    //       wx.showToast({
    //         title: res.data.error_msg
    //       })
    //     }
    //   }
    // })
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
    console.log('----到底啦----')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})