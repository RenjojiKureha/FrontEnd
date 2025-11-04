// 引入fs(文件系统)模块
const fs = require('fs');

// 写入文件（覆盖写入）
// 参数一：文件路径
// 参数二：写入内容
// 参数三：回调函数，写入完成后调用
fs.writeFile('example.txt', '普通文件写入', (err) => {
    if (err) {
        console.error('写入文件时出错:', err);
    } 
    console.log('文件写入成功');
});

// 同步写入文件
fs.writeFileSync('example_sync.txt', '同步文件写入');