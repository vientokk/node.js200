const express = require('express');

const app = express();

// body-parser 설치후 사용했어야 했는데 express 에 내장되었음.
//const bodyParser = require('body-Parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/login`));

app.post('/login.html', (req, res) => {
    const userId = req.body.userid;
    const userPassword = req.body.password;

    res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
    res.write(`<h1>Login ID와 PW결과 값입니다.`);
    res.write(`<div><p>${userId}</p></div>`);
    res.write(`<div><p>${userPassword}</p></div>`);
    res.end(JSON.stringify(req.body, null, 2));
});


app.get('/pet', function (요청, 응답) {
    응답.send("펫용품 쇼핑페이지입니다. ");
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login/login.html');
});

app.listen(3000, () => {
    console.log('server start 3000');
})