const fs = require('fs');

fs.readFile('./list.json', (err, data) => {
    if (err) { console.log(err); return; }
    const json = JSON.parse(data.toString());
    console.log('name : ', json[0].name);
    console.log('name : ', json[1].name);
})