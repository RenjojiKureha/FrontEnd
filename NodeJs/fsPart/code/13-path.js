// 导入fs模块
const fs = require('fs');
const path = require('path');

// 写入文件
fs.writeFileSync(__dirname + '/example.txt', 'Hello, Node.js fs module!');
console.log( __dirname + '/example.txt');

// resolve 解决
const filePath = path.resolve(__dirname, 'example.txt');
console.log('Resolved file path:', filePath);

// sep separator 分隔符
console.log('Path separator:', path.sep); // Windows上是 \，类Unix系统上是 /

// parse 解析路径 __dirname '全局变量'
console.log(__filename); // 文件的绝对路径
let str = 'C:\\Users\\22719\\Desktop\\FrontEnd\\NodeJs\\fsPart\\code\\13-path.js';
const parsedPath = path.parse(str);
console.log('Parsed path:', parsedPath);

// basename 获取文件名
const baseName = path.basename(str);
console.log('Base name:', baseName); // 输出: 13-path.js

// dirname 获取目录名
const dirName = path.dirname(str);
console.log('Directory name:', dirName); // 输出: C:\Users\22719\Desktop\FrontEnd\NodeJs\fsPart\code

// extname 获取扩展名
const extName = path.extname(str);
console.log('Extension name:', extName); // 输出: .js