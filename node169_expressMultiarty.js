//파일업로드 
//npm i connect-multiparty
const express = require('express');
const fs = require('fs');
const multipart = require('connect-multiparty');

const app = express();
app.use(multipart({ uploadDir: `${__dirname}/upload` }));

app.get('/', (req, res) => {
    fs.readFile('node169_expressMultiarty.html', (err, data) => {
        res.send(data.toString());
    });
});

app.listen(3000, () => {
    console.log('server start 3000');
});

app.post('/', (req, res) => {
    const imgFile = req.files.image;
    const outputPath = `${__dirname}/upload/${Date.now()}_${imgFile.name}`;
    console.log(outputPath);
    console.log(req.body, req.files);
    fs.rename(imgFile.path, outputPath, () => {
        res.redirect('/');
    });
});