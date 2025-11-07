// 导入express模块
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/', (req, res) => {
  res.end('Hello, Express!');
});

app.get('/home', (req, res) => {
  res.end('home');
});

// post
app.post('/login', (req, res) => {
  res.end('login');
});

// 匹配所有请求方法的路由
app.all('/test', (req, res) => {
  res.end('test');
});

// 处理未匹配到的路由
app.all('*', (req, res) => {
  res.end('404 Not Found');
});

// 监听端口，启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});