// 导入express模块 
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/:id.html', (req, res) => {

    // 获取url路由参数
    console.log(req.params.id);
    const productId = req.params.id; // 获取路由参数id

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('商品详情');
});

// 监听端口，启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});