const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const utilities = require('./utilities');


//Using the Axios library to query a site and retrieve the source HTML code
const url = 'https://www.oberlo.com/blog/best-inspirational-business-quotes';
var quotes_csv = "";

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const quotesList = $('.article-content > p');

        writeToFile(parseString(quotesList));

    })
    .catch(console.error);








