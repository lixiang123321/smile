// //index.js
// Page({
//   data: {
//     photos: [], //照片数组
//     columns: 2, //列数
//     loading: false //加载状态
//   },
//   onLoad() {
//     console.log('${wx.env.USER_DATA_PATH}');
//     this.loadPhotos(); //加载照片
//   },
//   onReachBottom() {
//     this.loadPhotos(); //触底时加载更多照片
//   },
//   loadPhotos() {
//     if (this.data.loading) return; //如果正在加载，直接返回
//     this.setData({ loading: true }); //设置加载状态为true
//     wx.getFileSystemManager().readdir({ //读取本地文件夹中的照片文件列表（假设文件夹名为photos）
//       dirPath: './pics/smile/',
//       success: (res) => {
//         let files = res.files; //获取文件列表数组
//         let photos = this.data.photos; //获取当前页面的照片数组
//         for (let i = 0; i < files.length; i++) { 
//           let file = files[i]; 
//           let photo = {}; 
//           photo.src = file.path; //设置照片的本地路径（src属性）
//           photo.tag = file.tag; //设置照片的标签（tag属性，假设文件名中包含标签信息）
//           photos.push(photo); //将照片对象添加到照片数组中
//         }
//         this.setData({ photos: photos }); //更新页面数据
//       },
//       fail: (err) => {
//         console.log(err); //打印错误信息
//       },
//       complete: () => {
//         this.setData({ loading: false }); //设置加载状态为false
//       }
//     })
//   },
//   onTap(e) { 
//     let index = e.currentTarget.dataset.index; //获取点击事件中的索引值（假设wxml中绑定了data-index属性）
//     let photo = this.data.photos[index]; //根据索引值获取对应的照片对象

//     getApp().globalData.total++; //将全局变量total加一

//     if (photo.tag == 'smile') { 
//       getApp().globalData.smile++; 
//       wx.previewImage({ 
//         urls: [photo.src] 
//       })
//     }

//     this.setData({ 
//       total: getApp().globalData.total,
//       smile: getApp().globalData.smile,
//      });
//   }
// })

const pics = [
  {src: './pics/smile/FM_000046_IEU+00_PM+00_EL_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'smile'},
{src: './pics/smile/FM_000145_IEU+00_PM+00_EL_A0_D0_T0_BB_M0_R0_S0.jpg', type: 'smile'},
{src: './pics/smile/FM_000688_IEU+00_PM+00_EL_A0_D0_T0_BB_M0_R0_S0.jpg', type: 'smile'},
{src: './pics/smile/FY_000007_IEU+00_PM+00_EL_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'smile'},
{src: './pics/smile/FY_000010_IEU+00_PM+00_EL_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'smile'},
{src: './pics/smile/FY_000013_IEU+00_PM+00_EL_A1_D0_T0_BB_M0_R1_S0.jpg', type: 'smile'},
{src: './pics/smile/FY_000015_IEU+00_PM+00_EL_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'smile'},
{src: './pics/smile/FY_000023_IEU+00_PM+00_EL_A0_D0_T0_BB_M0_R0_S0.jpg', type: 'smile'},
{src: './pics/smile/FY_000025_IEU+00_PM+00_EL_A0_D0_T0_BB_M0_R0_S0.jpg', type: 'smile'},
{src: './pics/smile/FY_000032_IEU+00_PM+00_EL_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'smile'},
{src: './pics/others/FM_000046_IEU+00_PM+00_EF_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'others'},
{src: './pics/others/FM_000046_IEU+00_PM+00_ES_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'others'},
{src: './pics/others/FM_000145_IEU+00_PM+00_EF_A0_D0_T0_BB_M0_R0_S0.jpg', type: 'others'},
{src: './pics/others/FM_000145_IEU+00_PM+00_ES_A0_D0_T0_BB_M0_R0_S0.jpg', type: 'others'},
{src: './pics/others/FM_000688_IEU+00_PM+00_EF_A0_D0_T0_BB_M0_R0_S0.jpg', type: 'others'},
{src: './pics/others/FM_000688_IEU+00_PM+00_ES_A0_D0_T0_BB_M0_R0_S0.jpg', type: 'others'},
{src: './pics/others/FY_000007_IEU+00_PM+00_EF_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'others'},
{src: './pics/others/FY_000007_IEU+00_PM+00_ES_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'others'},
{src: './pics/others/FY_000010_IEU+00_PM+00_EF_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'others'},
{src: './pics/others/FY_000010_IEU+00_PM+00_ES_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'others'},
{src: './pics/others/FY_000013_IEU+00_PM+00_EF_A1_D0_T0_BB_M0_R1_S0.jpg', type: 'others'},
{src: './pics/others/FY_000013_IEU+00_PM+00_ES_A1_D0_T0_BB_M0_R1_S0.jpg', type: 'others'},
{src: './pics/others/FY_000015_IEU+00_PM+00_EF_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'others'},
{src: './pics/others/FY_000015_IEU+00_PM+00_ES_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'others'},
{src: './pics/others/FY_000023_IEU+00_PM+00_EF_A0_D0_T0_BB_M0_R0_S0.jpg', type: 'others'},
{src: './pics/others/FY_000023_IEU+00_PM+00_ES_A0_D0_T0_BB_M0_R0_S0.jpg', type: 'others'},
{src: './pics/others/FY_000025_IEU+00_PM+00_EF_A0_D0_T0_BB_M0_R0_S0.jpg', type: 'others'},
{src: './pics/others/FY_000025_IEU+00_PM+00_ES_A0_D0_T0_BB_M0_R0_S0.jpg', type: 'others'},
{src: './pics/others/FY_000032_IEU+00_PM+00_EF_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'others'},
{src: './pics/others/FY_000032_IEU+00_PM+00_ES_A0_D0_T0_BB_M0_R1_S0.jpg', type: 'others'}
]

Page({
  data: {
    // 这一块竟然不能在这配置
    // columns: 2,
    // pic_width: 48, //vw
    // pic_height: 64, //vw, 48:64=3:4
    // gap: 4, //vw, 100-48*2
    list: pics,
  },
  isShowDetail: false,
  detailSrc: '',
  onTap(e) { 
    // console.log(e);
    // console.log(e.currentTarget)
    // console.log(e.currentTarget.dataset) // 对应wxfor里的data-*
    let item = e.currentTarget.dataset.item; //（假设wxml中绑定了data-item 属性）
  
    getApp().globalData.total++; //将全局变量total加一

    if (item.type == 'smile') { 
      getApp().globalData.smile++; 
      // wx.previewImage({ 
      //   urls: [item.src] 
      // }) // 不能加载包内src
      // wx.cropImage({
      //   src: '', // 图片路径
      //   cropScale: '4:3' // 裁剪比例
      // }) // 没反应
      this.setData({
        detailSrc: item.src,
        isShowDetail: true
      })
    }

    console.log(getApp().globalData.total);
    console.log(getApp().globalData.smile);

    this.setData({ 
      total: getApp().globalData.total,
      smile: getApp().globalData.smile,
      });
  },
  onDetailTap(e) {
    this.setData({
      isShowDetail: false
    })
  }
})
