// const cheerio = require('cheerio');
// const request = require('request');
// const iconv = require('iconv-lite');
// const charset = require('charset');

// const query = '서울대입구역 맛집'; // 검색어 입력

// const options = {
//     url: 'https://www.google.com/search',
//     method: 'GET',
//     qs: { q: query },
//     headers: {
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
//     },
//     encoding: null
// };

// request(options, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//         const enc = charset(response.headers, body);
//         const decodedResult = iconv.decode(body, enc);
//         const $ = cheerio.load(decodedResult);
//         const titles = $('div.tF2Cxc').find('div.yuRUbf > a > h3');
//         titles.each((index, element) => {
//             const title = $(element).text();
//             console.log(title);
//         });
//         console.log();
//         console.log(titles.length);
//     } else {
//         console.log(`Error: ${error}`);
//     }
// });

const express = require('express');

const app = express();


app.use(express.static(`${__dirname}/login`));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/login/login.html');
});

app.listen(3000, () => {
    console.log('server start 3000');
})