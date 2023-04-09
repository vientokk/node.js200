const cheerio = require('cheerio');
const crawler = require('./crawler');

const parse = (decodedResult) => {
    const $ = cheerio.load(decodedResult);
    const titles = $('div.tF2Cxc').find('div.yuRUbf > a > h3');
    titles.each((index, element) => {
        const title = $(element).text();
        console.log(title);
    });
};

const query = { q: '숙대입구역 맛집' }; // 검색어 입력

crawler.crawl(parse)(query);