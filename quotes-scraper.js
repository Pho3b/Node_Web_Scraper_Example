const axios = require('axios');
const cheerio = require('cheerio');
const utilities = require('./utilities');


//Using the Axios library to query a site and retrieve the source HTML code
const url = 'https://www.oberlo.com/blog/best-inspirational-business-quotes';

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const quotesList = $('.article-content > p');

        utilities.writeToFile(utilities.parseString(quotesList));

    })
    .catch(console.error);








