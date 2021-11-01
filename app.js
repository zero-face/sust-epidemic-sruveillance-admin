// app.js
import request from 'utils/request'
App({
  globalData: {
    server_prefix: 'http://localhost:8091/',
    dataList: [{name:"test",value:200}]
  },
 
  onLaunch() {
    request('/api/v1/user/epidemic-data/getAllProvinceEpidemicData').then(res => {
      // console.log(res.data.list)
      // this.globalData.dataList=res.data.list
      // // console.log(this.globalData.dataList)
    })

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  async getAllProvinceEpidemicData(){
    let dataList=await request('/api/v1/user/epidemic-data/getAllProvinceEpidemicData');
    console.log(dataList.data.list);
    this.setData({
      dataList:dataList.data.list
    })
  },

})
