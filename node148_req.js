//크롤링
const request = require('request');

request({
    url: 'https://google.com/',
    method: 'GET',
}, (err, res, body) => {
    console.log(body);
});