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
    total: 0, //总计数器
    smile: 0, //微笑计数器
    list: [],
  },
  isShowDetail: false,
  detailSrc: '',
  shuffle: function(arr) { // shuffle会改变arr本身
    // 
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let j = Math.floor(Math.random() * (len - i));
      let temp = arr[j];
      arr[j] = arr[len - i - 1];
      arr[len - i - 1] = temp;
    }
    return arr;
  },
  onLoad: function() {
    // 将所有图片随机排列，以便瀑布流展示
    //this.shuffle(pics) // pics 变了？确实变了
    //this.setData({ list: pics}) 

    // 注意array是指针概念
    //var randomizedPics = this.shuffle(pics) // randomizedPics -> pics
    //this.setData({ list: randomizedPics }) // list -> pics
    
    this.onReachBottom() // 为什么这里用统一的上拉，就可以；如果是先加载了一点点就不行？
    //console.log(this.data.list == pics)
  },
  onReachBottom() { 
    wx.showLoading({
      title: '加载更多',
    })

    var randomizedPics = this.shuffle(pics) // pics变了，list变了
    // console.log(this.data.list)
    // console.log(typeof this.data.list) // object
    randomizedPics = this.data.list.concat(randomizedPics)
    // concat是新的数组 list !-> pics
    this.setData({list: randomizedPics}) // setData才会到界面
    console.log(this.data.list);

    wx.hideLoading()
  },
  onTap(e) { 
    // console.log(e);
    // console.log(e.currentTarget)
    // console.log(e.currentTarget.dataset) // 对应wxfor里的data-*
    let item = e.currentTarget.dataset.item; //（假设wxml中绑定了data-item 属性）
  
    this.data.total++; //将全局变量total加一

    if (item.type == 'smile') { 
      this.data.smile++; 
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

    console.log(this.data.total);
    console.log(this.data.smile);
    // 打印是有++的，但是得set回去才回到页面展示

    this.setData({ 
      total: this.data.total,
      smile: this.data.smile,
      });
  },
  onDetailTap(e) {
    this.setData({
      isShowDetail: false
    })
  }
})
