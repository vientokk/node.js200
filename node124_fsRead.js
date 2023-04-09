//파일 읽기_동기
const fs = require('fs');
const data = fs.readFileSync('./message.txt');
const string = data.toString();
console.log('sync work01');
console.log(string);