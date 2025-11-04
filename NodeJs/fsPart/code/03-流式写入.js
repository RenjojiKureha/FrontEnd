// 导入fs模块
const fs = require('fs');

// 创建写入流对象
const writeStream = fs.createWriteStream('stream_example.txt');

// write
writeStream.write('这是通过流写入的第一行内容。\n');
writeStream.write('这是通过流写入的第二行内容。\n');
writeStream.write('这是通过流写入的第三行内容。\n');

// 结束写入
// writeStream.end('这是通过流写入的最后一行内容。\n');
// 或者直接调用close方法，关闭通道
writeStream.close();