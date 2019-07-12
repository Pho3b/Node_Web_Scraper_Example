
module.exports = {

    //Takes a JSON string as parameter: Parse the string that i receive from the HTTP request and do some string manipulation
    //It returns a parsed strng
    parseString: function (quotesList) {
        let first_child;
        let listLen = quotesList.length - 6; 
        let quote;
        
        for (let i = 8; i < listLen; i++) {
            first_child = quotesList[i].children[0];
            
            if (first_child.name == "span") {
                try {
                    quote = first_child.children[0].data;
                    quote = quote.substring(3, quote.length - 1).trim();
                    
                    if (quote != "" || quote != null) 
                        quotes_csv += quote + "!-!";

                } catch (e) {
                    //Debug purposes
                    //console.log(e);
                }
            }else {
                try {
                    quote = first_child.children[0].data;
                    quote = quote.substring(3, quote.length - 1).trim();

                    if (quote != "" || quote != null) 
                        quotes_csv += quote + "!-!";
                
                } catch (e) {
                    //Debug purposes
                    //console.log(e);
                }
            }

        }
        return quotes_csv;
    },


    //Takes a string as a parameter and writes it into a .txt file
    writeToFile: function (text) {
        fs.writeFile("quotes.txt", text , function(err) {
            if(err) {
                return console.log(err);
            }
        
            console.log("The file was saved!");
        });  

    }

}
