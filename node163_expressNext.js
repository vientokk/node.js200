//미들웨어

const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('첫번째 미들웨어 요청');
    req.user1 = '철수';
    next();
});

app.use((req, res, next) => {
    console.log('두번째 미들웨어 요청');
    req.user2 = '영희';
    next();
});


app.use((req, res, next) => {
    console.log('세번째 미들웨어에 요청');
    res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });

    res.write(`<div><p>${req.user1}</p></div>`);
    res.write(`<div><p>${req.user2}</p></div>`);
    res.end('<h1>express 서버에서 응답한 결과</h1>');
});


app.listen(3000, () => {
    console.log('Server is running port 3000!');
});
