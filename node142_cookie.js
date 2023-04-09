const http = require('http');

http.createServer((req, res) => {
    if (req.headers.cookie) {
        const cookie = req.headers.cookie.split(';').map((element) => {
            element = element.split('=');
            return {
                name: element[0],
                value: element[1],
            };
        });
        res.end(`<h1>${JSON.stringify(cookie)}</h1>`);
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ['Soju = Pork', 'beer = chicken'],
        });
        res.end(`<h1>sss</h1>`);
    }
}).listen(50000, () => {
    console.log(`서버 동작함`);
});