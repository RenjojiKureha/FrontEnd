// 导入express模块
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/', (req, res) => {
  res.end('Hello, Express!');
});

// 监听端口，启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});