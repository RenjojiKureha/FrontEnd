// 导入http模块
const http = require('http');
// 导入url模块
const url = require('url');

// 创建服务对象
const server = http.createServer((req, res) => {
    // 解析请求URL
    console.log(req.url);
    let res = url.parse(req.url, true);
    console.log(res);
    // 路径
    let pathname = res.pathname;
    console.log('pathname:', pathname);
    // 查询字符串
    let query = res.query;
    console.log('query:', query);
    // 响应客户端
    res.end('url');
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('HTTP Server is running at http://localhost:9000');
});
    