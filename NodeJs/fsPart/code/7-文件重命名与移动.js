// 导入fs模块
const fs = require('fs');

// 调用rename方法重命名文件
// 参数一：旧文件路径
// 参数二：新文件路径
// 参数三：回调函数，重命名完成后调用
fs.rename('./example.txt', './example-new_name.txt', (err) => {
    if (err) {
        console.log('文件重命名失败', err);
        return;
    }
    console.log('文件重命名成功');
});

// 调用rename方法移动文件
// 参数一：旧文件路径
// 参数二：新文件路径
// 参数三：回调函数，移动完成后调用
fs.rename('../resource/shocked_copy1.jpg', '../resource/subfolder/shocked_copy1.jpg', (err) => {
    if (err) {
        console.log('文件移动失败', err);
        return;
    }   
    console.log('文件移动成功');
});