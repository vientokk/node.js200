const request = require('request');
const iconv = require('iconv-lite');
const charset = require('charset');

const crawl = callback => queryString => {
    const options = {
        url: 'https://www.google.com/search',
        method: 'GET',
        qs: queryString,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
        },
        encoding: null
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const enc = charset(response.headers, body);
            const decodedResult = iconv.decode(body, enc);
            callback(decodedResult);
        } else {
            console.log(`Error: ${error}`);
        }
    });
};

module.exports.crawl = crawl;
