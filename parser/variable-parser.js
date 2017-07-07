let Variable = require('../data/variable').Variable;
let Type = require('../data/type').Type;

class VariableParser extends Parser {
    constructor() {
        super();

        this.pattern = /var [a-zA-Z]+ [a-zA-Z][a-z-A-Z0-9]* = \"?[a-zA-Z0-9]\"?/;
    }

    parse(parentBlock, lexer) {
        lexer.nextToken(); // skip var token
        let type = Type[lexer.nextToken().token];

        if(!type) {
            // Had to pause, on video Episode 6: Variable and Class Parser
        }

        let name = lexer.nextToken().token;

        lexer.nextToken(); // skip the = token

        let value = lexer.nextToken();

        // Had to pause, on video Episode 6: Variable and Class Parser
    }
}