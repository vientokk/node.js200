//npm i cookie-parser
//localhost/set 으로 접속 해봐요
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/set', (req, res) => {
    console.log('Set Cookie호출');
    res.cookie('user', { id: '0070', name: 'brain', authorized: true, });
    res.redirect('/get');
});

app.get('/get', (req, res) => {
    console.log('get Cookie호출');
    res.send(req.cookies);
});

app.listen(3000, () => {
    console.log('server start 3000');
});