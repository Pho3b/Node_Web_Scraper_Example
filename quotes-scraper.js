const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');


//Using the Axios library to query a site and retrieve the source HTML code
const url = 'https://www.oberlo.com/blog/best-inspirational-business-quotes';
var quotes_csv = "";

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const quotesList = $('.article-content > p');

        writeQuotes(quotesList);
    })
    .catch(console.error);



//Takes a JSON string as parameter, it cycles through the nodes and retrieve data writing them into a txt file
function writeQuotes(quotesList) {
    let first_child;
    let listLen = quotesList.length - 6;
    
    for (let i = 8; i < listLen; i++) {
         first_child = quotesList[i].children[0];
         
         if (first_child.name == "span") {
            try {
                let quote1 = first_child.children[0].data;
                quote1 = quote1.substring(3, quote1.length - 1).trim();
                
                if (quote1 != "" || quote1 != null) 
                    quotes_csv += quote1 + "!-!";

            } catch (e) {
               console.log(e);
            }
        }else {
            try {
                let quote2 = first_child.children[0].data;
                quote2 = quote.substring(3, quote2.length - 1).trim();

                if (quote2 != "" || quote2 != null) 
                    quotes_csv += quote2 + "!-!";
            
            } catch (e) {

            }
        }

    }


    fs.writeFile("quotes.txt", quotes_csv , function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    });  

}




