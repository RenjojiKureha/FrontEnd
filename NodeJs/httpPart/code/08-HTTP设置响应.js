// 导入http模块
const http = require('http');

// 创建一个HTTP服务器
const server = http.createServer((req, res) => {
    // 设置响应状态码
    res.statusCode = 200;
    // 响应状态的描述
    res.statusMessage = 'OK';
    // 设置响应头，指定内容类型和字符编码
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    // 自定义响应头
    res.setHeader('X-Custom-Header', 'MyHeaderValue');
    // 设置响应体
    res.write('Hello');
    res.write('Hello');
    res.write('Hello');
    res.end('');
});

// 监听端口，启动服务器
server.listen(9000, () => {
    console.log('HTTP Server is running at http://localhost:9000');
});