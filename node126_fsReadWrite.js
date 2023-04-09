//파일 내용 수정하기  
//파일쓰기 할때 callback에 예외사항 없으면 에러남
//참고 https://ba-gotocode131.tistory.com/91

const fs = require('fs');
fs.readFile('./message.txt', (err, data) => {
    if (err) { console.log(err); return; };
    //if (err) { throw err; };
    let contents = data.toString();
    contents = 'replacddded';
    fs.writeFile('./message.txt', contents, 'utf-8', function (error) {
        if (err) { console.log(error); return; };
    });
})