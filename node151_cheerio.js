//html 에서 데이트를 추출
const cheerio = require('cheerio');

const $ = cheerio.load(`<html><h2 class="title">hello</h2></html>`);
const titleText = $('h2.title').text();

console.log('titleText : ', titleText);