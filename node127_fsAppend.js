//파일 내용 수정하기  
//파일쓰기 할때 callback에 예외사항 없으면 에러남
//참고 https://ba-gotocode131.tistory.com/91

const fs = require('fs');

const list = [1, 2, 3, 4, 5];

list.forEach(item => fs.appendFile('./message.txt', `chapter ${item}\n`, function (error) {
    console.log('write end!');
}));
