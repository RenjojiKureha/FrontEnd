// 导入http模块
const http = require('http');

// 创建服务对象
const server = http.createServer((req, res) => {
    // 声明一个变量用来存储客户端请求体的数据
    let body = '';
    // 绑定事件
    req.on('data', chunk => {
        body += chunk; // 将每次接收到的数据块拼接到body变量中
    });

    req.on('end', () => {
        // 当请求体数据接收完毕后触发end事件
        console.log('Received request body:', body); // 输出完整的请求体数据
        res.end('Request body received');
    });
    
    res.end('http');
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('HTTP Server is running at http://localhost:9000');
});
    