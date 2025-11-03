// 导入fs模块
const fs = require('fs');

// 创建读取流对象
const rs = fs.createReadStream('../resource/shocked.jpg');

// 绑定data事件 chunk 块
rs.on('data', (chunk) => {
    console.log('读取到数据块:');
    console.log(chunk);
    console.log(chunk.length);
});

// 绑定end事件
rs.on('end', () => {
    console.log('数据读取完毕');
});