// 导入fs模块
const fs = require('fs');

// 相对路径
fs.writeFileSync('./relative.txt', '这是相对路径写入的内容');
fs.writeFileSync('../relative-up.txt', '这是上一级相对路径写入的内容');
fs.writeFileSync('relative-there.txt', '这是相对路径写入的内容');

// 绝对路径
fs.writeFileSync('C:/Users/22719/Desktop/FrontEnd/NodeJs/fsPart/code/absolute-path.txt', '这是绝对路径写入的内容');
fs.writeFileSync('/Users/22719/Desktop/FrontEnd/NodeJs/fsPart/code/absolute-path2.txt', '这是绝对路径写入的内容');