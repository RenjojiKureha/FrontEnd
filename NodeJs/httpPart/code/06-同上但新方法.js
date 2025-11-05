// 导入http模块
const http = require('http');

// 创建服务对象
const server = http.createServer((req, res) => {
    // 实例化url对象
    // let urlObj = new URL('/search?a=100&b=200', `http://${req.headers.host}`);
    let urlObj = new URL(req.url, `http://${req.headers.host}`);
    // 输出路径
    console.log('pathname:', urlObj.pathname);
    // 输出keyword查询字符串
    console.log('searchParams - keyword:', urlObj.searchParams.get('keyword'));
    // 响应客户端
    res.end('url new');
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('HTTP Server is running at http://localhost:9000');
});
    