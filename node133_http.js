//웹서버 실행
const http = require('http');

const server = http.createServer();

server.listen(3000, () => {
    console.log(`서버 실행 3000`);

})

const testClose = () => {
    server.close();
    console.log(`서버 종료`);
    process.exit(1);
}

setTimeout(testClose, 5000);