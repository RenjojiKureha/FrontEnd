// 导入http模块
const http = require('http');
// 导入fs模块
const fs = require('fs');

// 创建服务对象
const server = http.createServer((req, res) => {
    fs.readFile('./09-练习-HTTP响应.html', 'utf8', (err, file) => {
        if (err) {
            res.statusCode = 500;
            res.statusMessage = 'Internal Server Error';
            res.end('Error reading file');
            return;
        }
        // 设置响应体并结束响应
        res.end(file);
    });
});

// 监听端口，启动服务器
server.listen(9000, () => {
    console.log('HTTP Server is running at http://localhost:9000');
});