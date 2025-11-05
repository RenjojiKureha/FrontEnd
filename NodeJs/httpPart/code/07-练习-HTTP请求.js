// 导入http模块
const http = require('http');

// 创建一个HTTP服务器
const server = http.createServer((req, res) => {
    // 设置响应头，指定内容类型和字符编码
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    // 获取请求方法和URL
    let {method} = req;
    let {pathname} = new URL(req.url, `http://${req.headers.host}`);
    // 根据请求方法和路径返回不同的响应内容
    if (method === 'GET' && pathname === '/') {
        res.end('这是首页');
    } else if (method === 'GET' && pathname === '/about') {
        res.end('这是关于页面');
    } else {
        res.end('404 Not Found');
    }
});

// 监听端口，启动服务器
server.listen(9000, () => {
    console.log('HTTP Server is running at http://localhost:9000');
});