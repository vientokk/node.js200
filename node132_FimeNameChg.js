//rename 파일이름변경
const fs = require('fs');

const renameFile = (fromFilePathName, toFilePathName) => {
    fs.rename(fromFilePathName, toFilePathName, (err) => {
        if (err) { console.log(`ERROR : ${err}`); }
    });
};

const fromFilePathName = './hello.txt';
const toFilePathName = './bye.txt';

renameFile(fromFilePathName, toFilePathName);