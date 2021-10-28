import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [] ,// 轮播图数据
    hotGraduationPicture:[],//热门毕业照数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:  function (options) {
    //this.getBanner(),
    //this.getHotGraduationPicture()
  },
  //获取轮播图
  
  async getBanner(){
    let bannerListData=await request('/picture/banner/getBanner');
    this.setData({
      bannerList:bannerListData.data.bannerList
    })
  },
  async getHotGraduationPicture(){
    let pictureListData=await request('/picture/picture/getHotPictureAndClass');
    this.setData({
      hotGraduationPicture:pictureListData.data.pictureList
    })
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