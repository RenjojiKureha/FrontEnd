// 导入http模块
const http = require('http');

// 创建服务对象
const server = http.createServer((req, res) => {
    // 获取请求方法
    console.log(req.method);
    // 获取请求URL
    console.log(req.url);
    // 获取HTTP版本
    console.log(req.httpVersion);
    // 获取请求头
    console.log(req.headers);
    console.log(req.headers.host); // 获取Host头
    res.end('http');
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('HTTP Server is running at http://localhost:9000');
});
    