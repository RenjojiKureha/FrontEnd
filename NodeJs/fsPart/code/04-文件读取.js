// 引入fs模块
const fs = require('fs');

// 读取文件内容（异步）
// 参数一：文件路径
// 参数二：编码格式（可选）
// 参数三：回调函数，读取完成后调用
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('读取文件时出错:', err);
        return;
    }
    console.log('异步读取文件内容:');
    console.log(data);
});

// 读取文件内容（同步）
let data = fs.readFileSync('example_sync.txt', 'utf8');
console.log('同步读取文件内容:');
console.log(data.toString());