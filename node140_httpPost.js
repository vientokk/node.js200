const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    if (req.method === 'GET') {
        fs.readFile('./node140_httpPost.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            console.log(`${req.method} 방식의 요청입니다.`);
        });
    } else if (req.method === 'POST') {
        req.on('data', (data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            console.log(`${req.method} 방식의 요청입니다.`);
        });
    }
}).listen(50000, () => {
    console.log(`서버실행중`);
})

