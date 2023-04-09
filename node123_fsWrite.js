//파일생성, 쓰기
//파일쓰기 할때 callback에 예외사항 없으면 에러남
//참고 https://ba-gotocode131.tistory.com/91

const fs = require('fs');

const contents = 'hello\nbye\n안녕';
//fs.writeFile("./message.txt", contents);
fs.writeFile('./message.txt', contents, 'utf-8', function () {
    console.log('write end!');
});
