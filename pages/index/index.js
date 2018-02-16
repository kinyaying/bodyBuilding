//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '审美',
    userInfo: {}
  },
  randomStr(length) {
    var str = '';
    for (; str.length < length; str += Math.random().toString   (36).substr(2));
    return str.substr(0, length);
    // return Math.random().toString(36).substring(3, 8)
  },
  //事件处理函数
  bindViewTap: function() {
    console.log(this.randomStr(32).length);
    var config = {
      'timeStamp': Date.parse(new Date()),
      'nonceStr': this.randomStr(32),
      'package': 'prepay_id=*',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
        alert('success');
      },
      'fail': function (res) {
        alert('error');
      }
    };

    wx.requestPayment({
      'timeStamp': timestamp,
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
        alert('success');
      },
      'fail': function (res) {
        alert('error');
      }
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
