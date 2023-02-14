// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    wording: 'girl'
  },
  onClick: function () {
    // target_word = this.data.wording === 'girl' ? 'boy' : 'girl'
    this.setData({
      wording: this.data.wording === 'girl' ? 'boy' : 'girl'
    })
  }

}
)
