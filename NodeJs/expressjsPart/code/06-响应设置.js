// 导入express模块
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由，使用路由参数
app.get('/response', (req, res) => {
    // 原生响应
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.write('Hello, World!');
    res.statusCode = 201;
    res.statusMessage = 'Created';
    res.end();

    // 使用Express响应
    res.status(200);
    res.set('Content-Type', 'text/plain; charset=utf-8');
    res.send('Hello, World!');
    // 或者简写为
    res.status(200).type('text/plain; charset=utf-8').send('Hello, World!');

    // 其他响应方法
    // 跳转响应
    res.redirect('https://www.example.com');
    // 下载响应
    res.download('/path/to/file.txt');
    // json响应
    res.json({ message: 'Hello, World!' });
    // 响应文件内容
    res.sendFile('/path/to/file.txt');

    res.end(``);
});

// 启动服务器，监听端口3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});