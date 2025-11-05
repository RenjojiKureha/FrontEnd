// 导入http模块
const http = require('http');

// 创建服务对象
const server = http.createServer((request, response) => {
    // response.end('Hello, HTTP Server!'); // 设置响应内容
    response.setHeader('Content-Type', 'text/plain; charset=utf-8'); // 设置响应头，解决中文乱码问题
    response.end('你好，HTTP服务器！'); // 设置响应内容
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('HTTP Server is running at http://localhost:9000');
});

// http默认端口是80,https默认端口是443   