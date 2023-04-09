const fs = require('fs');

const userList = [
    { name: 'viento', age: 33 },
    { name: 'kk', age: 44 },
];
fs.writeFile('./list.json', JSON.stringify(userList), (err) => {
    if (err) { console.log(err) };
});