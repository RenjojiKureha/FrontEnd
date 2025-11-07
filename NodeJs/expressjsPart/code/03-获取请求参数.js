// 导入express模块
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/request', (req, res) => {
    // 原生操作
    console.log(req.method); // 获取请求方法
    console.log(req.url); // 获取请求URL
    console.log(req.headers); // 获取请求头

    // 使用Express封装的方法
    console.log(req.path); // 获取请求路径
    console.log(req.query); // 获取查询参数对象
    console.log(req.ip); // 获取客户端IP地址
    
    // 获取特定请求头
    console.log(req.get('User-Agent')); // 获取User-Agent请求头
    
    // 发送响应
    res.end('Hello, Express!');
});

// 监听端口，启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});