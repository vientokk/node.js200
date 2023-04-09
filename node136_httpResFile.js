const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile('./node136_exam.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}).listen(3000, () => {
    console.log(`서버동작중`);
});