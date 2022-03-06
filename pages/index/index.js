//Page Object
import { request } from '../../request/index.js'
Page({
  data: {
    swiperList: [],
    navList: [],
    floorDataList: []
  },
  //options(Object)
  onLoad: function(options) {
    // 获取swiper数据
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
    }).then(res => {
      this.setData({
        swiperList: res.data.message || []
      })
    })
    // 获取导航数据
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'
    }).then(res => {
      this.setData({
        navList: res.data.message || []
      })
    })
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'
    }).then(res => {
      this.setData({
        floorDataList: res.data.message || []
      })
    })
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (res) => {
        // this.setData({
        //   swiperList: res.data.message || []
        // })
    //   }
    // });
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  