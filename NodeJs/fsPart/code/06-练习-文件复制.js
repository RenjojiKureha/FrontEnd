// 导入fs模块
const fs = require('fs');
const process = require('process');// 引入process模块,用于观察内存变化

//方式一：readFile + writeFile
// 读取文件
let data = fs.readFileSync('../resource/shocked.jpg')
// 写入文件
fs.writeFileSync('../resource/shocked_copy1.jpg', data)
console.log(process.memoryUsage());// rss:31690752


//方式二：流式操作 （推荐）
// 创建读取流对象
const rs = fs.createReadStream('../resource/shocked.jpg');
// 创建写入流对象
const ws = fs.createWriteStream('../resource/shocked_copy2.jpg');

// 绑定data事件 
rs.on('data', (chunk) => {
    // 写入数据块
    ws.write(chunk);
});
// 绑定end事件
rs.on('end', () => {
    // 关闭写入流
    ws.end();
    console.log('文件复制完毕');
    console.log(process.memoryUsage());// rss:29310976
});

// 不绑data的简便写法
// rs.pipe(ws); --> pipe(管道) 方法会自动绑定data和end事件