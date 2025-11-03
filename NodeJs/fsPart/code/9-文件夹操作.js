//导入fs模块
const fs = require('fs');

//调用mkdir方法创建文件夹
//参数一：要创建的文件夹路径
//参数二：选项配置（可选）
//参数三：回调函数，创建完成后调用
fs.mkdir('./new_folder', (err) => {
    if (err) {
        console.log('文件夹创建失败', err);
        return;
    }   
    console.log('文件夹创建成功');
});

//调用mkdir方法创建多级文件夹 --> 即递归创建
//参数一：要创建的多级文件夹路径
//参数二：选项配置（可选），这里设置了recursive: true表示递归创建
fs.mkdir('./parent_folder/child_folder/grandchild_folder', { recursive: true }, (err) => {
    if (err) {
        console.log('多级文件夹创建失败', err);
        return;
    }
    console.log('多级文件夹创建成功');
});

//调用readdir方法读取文件夹内容
//参数一：要读取的文件夹路径
//参数二：回调函数，读取完成后调用
fs.readdir('../resource', (err, data) => {
    if (err) {
        console.log('读取文件夹内容失败', err);
        return;
    }
    console.log('文件夹内容读取成功:', data);
});

//调用rmdir方法删除文件夹
//参数一：要删除的文件夹路径
//参数二：回调函数，删除完成后调用
fs.rmdir('./new_folder', (err) => { 
    if (err) {
        console.log('文件夹删除失败', err);
        return;
    }
    console.log('文件夹删除成功');
});

//调用rmdir方法删除多级文件夹（注意：只能删除空文件夹）--> 不推荐使用
//参数一：要删除的多级文件夹路径
//参数二：选项配置，这里设置了recursive: true表示递归删除
//参数三：回调函数，删除完成后调用
fs.rmdir('./parent_folder', { recursive: true }, (err) => {
    if (err) {
        console.log('多级文件夹删除失败', err);
        return;
    }   
    console.log('多级文件夹删除成功');
});

//调用rm方法删除多级文件夹（Node.js v14.14.0及以上版本支持）--> 推荐使用
//参数一：要删除的多级文件夹路径
//参数二：选项配置，这里设置了recursive: true表示递归删除
//参数三：回调函数，删除完成后调用
fs.rm('./parent_folder', { recursive: true, force: true }, (err) => {
    if (err) {
        console.log('多级文件夹删除失败', err);
        return;
    }
    console.log('多级文件夹删除成功');
});