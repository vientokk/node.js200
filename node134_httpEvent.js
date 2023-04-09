//웝서버 생성, 실행

const http = require('http');
const server = http.createServer();

//이벤트 연결
server.on('request', () => {
    console.log(`request`);
});

server.on('connection', () => {
    console.log(`connection`);
});

server.on('close', () => {
    console.log(`close`);
});


server.listen(3000, () => {
    console.log(`서버 실행 3000`);

})


const testClose = () => {
    server.close();
    console.log(`서버 종료`);
    //process.exit(1);
}

setTimeout(testClose, 10000);