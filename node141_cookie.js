const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['soju=grilledPork', 'beer=chicken'],
    });
    res.end(`<h1>${req.headers.cookie}</h1>`);
}).listen(50000, () => {
    console.log('서버동작중');
})