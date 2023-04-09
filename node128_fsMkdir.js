const fs = require('fs');

const dirName = `${__dirname}/img`;

if (!fs.existsSync(dirName)) {
    fs.mkdir(dirName, (err) => {
        if (err) { console.log(err); return; };
        console.log("폴더작성");
    });
}