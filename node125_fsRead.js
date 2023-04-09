//파일 읽기_비동기
const fs = require('fs');
fs.readFile('./message.txt', (err, data) => {
    if (err) { console.log(err); return; };
    console.log('sync work01');
    console.log(data.toString());
})