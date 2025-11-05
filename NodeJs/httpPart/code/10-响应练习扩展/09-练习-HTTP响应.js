// 导入http模块
const http = require('http');
// 导入fs模块
const fs = require('fs');
// 导入path模块
const path = require('path');

// 创建服务对象
const server = http.createServer((req, res) => {
    // 获取请求url的路径
    let {pathname} = new URL(req.url, `http://${req.headers.host}`);
    // 拼接文件路径
    let filePath = `${__dirname}/page${pathname}`;
    // 读取文件fs异步api
    fs.readFile(filePath, 'utf8', (err, file) => {
        if (err) {
            res.statusCode = 500;
            res.statusMessage = 'Internal Server Error';
            res.end('Error reading file');
            return;
        }
        // 获取文件名后缀
        let extname = path.extname(filePath);
        console.log(extname);
        // 设置响应体并结束响应
        res.end(file);
    });
});

// 监听端口，启动服务器
server.listen(9000, () => {
    console.log('HTTP Server is running at http://localhost:9000');
});