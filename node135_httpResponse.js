//http 응답

require('http').createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Hello World');
}).listen(3000, () => {
    console.log(`서버 실행중`);
})