// 导入fs模块
const fs = require('fs');

// 读取code文件夹
const files = fs.readdirSync('../code');

// 遍历数组
files.forEach(item => {
    // 拆分文件名和后缀
    const data = item.split('-');
    let [num,name] = data;
    // 判断
    if(Number(num) < 10){
        num = '0' + num;
    }
    // 拼接新的文件名
    const newFileName = `${num}-${name}`;
    // 重命名
    fs.renameSync(`../code/${item}`, `../code/${newFileName}`);
    console.log(`已将 ${item} 重命名为 ${newFileName}`);
});