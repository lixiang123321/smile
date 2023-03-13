// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    smile_folder: '../../pics/smile',
    // smile_folder: `${wx.env.USER_DATA_PATH}`,
    rows: []
  },
  onLoad: function () {
    var that = this;
    // 获取屏幕宽度
    console.log("getSystemInfo() start");
    wx.getSystemInfo({
      success: function (res) {
        console.log("getSystemInfo success");
        var screenWidth = res.windowWidth;
        // 获取所有图片
        wx.getFileSystemManager().readdir({
          dirPath: that.data.smile_folder,
          success: function (res) {
            console.log("readdir() success", res);
            var rows = [];
            var row = [];
            var columnCount = 2;
            var columnWidth = (screenWidth - 10) / columnCount;
            res.files.forEach(function (file) {
              if (file.endsWith('.tif')) {
                row.push(file);
                if (row.length == columnCount) {
                  rows.push(row);
                  row = [];
                }
              }
            });
            if (row.length > 0) {
              rows.push(row);
            }
            that.setData({
              rows: rows
            });
          }
          ,fail(res) {
            console.error(res)
          }
        });
      }
    });
  }
});
