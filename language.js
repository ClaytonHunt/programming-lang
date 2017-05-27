const fs = require('fs');
const lexer = require('./lexer');
const parser = require('./parser');

let script = process.argv[2];

const openFile = (filename, callback) => {
    "use strict";

    fs.readFile(filename, 'utf8', (err, contents) => {
        if(err) {
            console.error(`\x1b[31mError: ${err.message}\x1b[0m`);
            return;
        }

        callback(contents);
    });
};

const run = () => {
    "use strict";

    openFile(script, (data) => {
        let lex = lexer(data);

        while(lex.hasNextToken()) {
            let token = lex.nextToken();

            console.log(token.getToken(), '\t|', token.getType());
        }

        //let ast = parser.run(tokens);
    });
};

run();