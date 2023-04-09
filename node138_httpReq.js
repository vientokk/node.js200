const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    let pathname = url.parse(req.url);
    pathname = url.parse(req.url).pathname;

    if (pathname == '/') {
        fs.readFile('./node138.html', (err, data) => {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.end(data);
            console.log(url.parse(req.url));
        });
    } else if (pathname === '/exam') {
        fs.readFile('./node136_exam.html', (err, data) => {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.end(data);
            console.log(url.parse(req.url));
        });
    }
}).listen(50000, () => {
    console.log(`서버 동작중`);
});