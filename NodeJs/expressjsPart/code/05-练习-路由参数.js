// 导入express模块
const express = require('express');
// 导入singers.json数据
const {singers} = require('./05-singers.json');

const fs = require('fs');
const path = require('path');

// 创建应用对象
const app = express();

// 创建路由，使用路由参数
app.get('/singer/:id.html', (req, res) => {
    // 获取路由参数
    let { id: singerId } = req.params;
    // 在数组中寻找对应id数据
    let result = singers.find(item => item.id === parseInt(singerId)); // parseInt将字符串转换为数字
    // 如果未找到对应数据，设置404状态码
    if (!result) {
        res.status(404);
        res.end('歌手不存在');
        return;
    }

    // 读取HTML模板文件
    let filePath = path.join(__dirname, '05-test.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500);    
        }
        // 使用模板数据替换占位符
        let filled = data
            .replace('{{name}}', result.name)
            .replace('{{genre}}', result.genre);

        // 发送响应
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(filled);
    });
});

// 监听端口，启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});