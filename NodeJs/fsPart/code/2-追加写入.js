// 引入fs模块
const fs = require('fs');

// 调用appendFile方法
// 追加写入文件
// 参数一：文件路径
// 参数二：追加内容
// 参数三：回调函数，追加写入完成后调用
fs.appendFile('example.txt', '\n这是追加的内容', (err) => {
    if (err) {
        console.error('追加写入文件时出错:', err);
    }
    console.log('文件追加写入成功');
});

// 同步追加写入文件
fs.appendFileSync('example_sync.txt', '\n这是同步追加的内容');

// writeFile 实现追加写入
fs.writeFile('example.txt', '\n这是通过writeFile实现的追加写入', { flag: 'a' }, (err) => {
    if (err) {
        console.error('通过writeFile追加写入文件时出错:', err);
    }   
    console.log('通过writeFile文件追加写入成功');
});