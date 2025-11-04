// 导入fs模块
const fs = require('fs');

// 调用stat方法查看文件或文件夹的信息
// 参数一：要查看的文件或文件夹路径
// 参数二：回调函数，查看完成后调用
fs.stat('../resource/shocked.jpg', (err, stats) => {
    if (err) {
        console.log('查看文件信息失败', err);
        return;
    }
    // 查看文件信息成功
    console.log('文件信息：', stats);
    // 判断是否是文件
    console.log('是否是文件：', stats.isFile());
    // 判断是否是文件夹
    console.log('是否是文件夹：', stats.isDirectory());
});

