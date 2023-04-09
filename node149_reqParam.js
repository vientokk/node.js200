//크롤링 파라미터 추가
const request = require('request');

request({
    url: 'https://google.com/search',
    method: 'GET',
    qs: { q: '신사역 맛집' },
}, (err, res, body) => {
    console.log(body);
});