const testFolder = './';
const fs = require('fs');

const fileNameList = fs.readdirSync(testFolder);

fileNameList.forEach((fileName) => {
    console.log(fileName);
})

// fs.readdir(testFolder, (err, filelist) => {  // 배열 형태로 출력
//     console.log(filelist);
// });

// fs.readdir(testFolder, (err, filelist) => { // 하나의 데이터씩 나누어 출력
//     filelist.forEach(fileName => {
//         console.log(fileName);
//     })
// });
