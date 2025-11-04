// 导入fs模块
const fs = require('fs');

// 调用unlink方法删除文件
// 参数一：要删除的文件路径
// 参数二：回调函数，删除完成后调用
fs.unlink('./example-new_name.txt', (err) => {
    if (err) {
        console.log('文件删除失败', err);
        return;
    }
    console.log('文件删除成功');
});

// 调用rm方法删除文件（Node.js v14.14.0及以上版本支持）
// 参数一：要删除的文件路径
// 参数二：回调函数，删除完成后调用
fs.rm('./example_sync.txt', (err) => {
    if (err) {
        console.log('文件删除失败', err);
        return;
    }       
    console.log('文件删除成功');
});