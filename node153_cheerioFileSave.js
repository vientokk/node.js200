const cheerio = require('cheerio');
const crawler = require('./crawler');
const fs = require('fs');

const parse = (decodedResult) => {
    const $ = cheerio.load(decodedResult);
    const titles = $('div.tF2Cxc').find('div.yuRUbf > a > h3');
    titles.each((index, element) => {
        const title = $(element).text();
        console.log(title);
        fs.appendFile('./titles.txt', `${title}\n`, (err) => {
            if (err) throw err;
            console.log('The title was appended to file!');
        });
    });
};

const query = { q: '서울대입구역 맛집' }; // 검색어 입력

crawler.crawl(parse)(query);
