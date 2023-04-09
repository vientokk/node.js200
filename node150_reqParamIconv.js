//크롤링 파라미터 추가
const request = require('request');
const iconv = require('iconv-lite');

request({
    url: 'https://google.com/search',
    method: 'GET',
    qs: { q: '신사역 맛집' },
    encoding: null,
}, (err, res, body) => {
    const decodedResult = iconv.decode(body, 'euc-kr');
    console.log(decodedResult);
});