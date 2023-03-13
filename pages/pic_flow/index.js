//index.js
Page({
  data: {
    photos: [], //照片数组
    columns: 2, //列数
    loading: false //加载状态
  },
  onLoad() {
    console.log('${wx.env.USER_DATA_PATH}');
    this.loadPhotos(); //加载照片
  },
  onReachBottom() {
    this.loadPhotos(); //触底时加载更多照片
  },
  loadPhotos() {
    if (this.data.loading) return; //如果正在加载，直接返回
    this.setData({ loading: true }); //设置加载状态为true
    wx.getFileSystemManager().readdir({ //读取本地文件夹中的照片文件列表（假设文件夹名为photos）
      dirPath: './pics/smile/',
      success: (res) => {
        let files = res.files; //获取文件列表数组
        let photos = this.data.photos; //获取当前页面的照片数组
        for (let i = 0; i < files.length; i++) { 
          let file = files[i]; 
          let photo = {}; 
          photo.src = file.path; //设置照片的本地路径（src属性）
          photo.tag = file.tag; //设置照片的标签（tag属性，假设文件名中包含标签信息）
          photos.push(photo); //将照片对象添加到照片数组中
        }
        this.setData({ photos: photos }); //更新页面数据
      },
      fail: (err) => {
        console.log(err); //打印错误信息
      },
      complete: () => {
        this.setData({ loading: false }); //设置加载状态为false
      }
    })
  },
  onTap(e) { 
    let index = e.currentTarget.dataset.index; //获取点击事件中的索引值（假设wxml中绑定了data-index属性）
    let photo = this.data.photos[index]; //根据索引值获取对应的照片对象

    getApp().globalData.total++; //将全局变量total加一

    if (photo.tag == 'smile') { 
      getApp().globalData.smile++; 
      wx.previewImage({ 
        urls: [photo.src] 
      })
    }

    this.setData({ 
      total: getApp().globalData.total,
      smile: getApp().globalData.smile,
     });
  }
})
