let Method = require('../blocks/method-block').Method;
let Parameter = require('/data/parameter').Parameter;
let type = require('/data/type').Type;


class MethodParser extends Parser {
    constructor() {
        super();

        this.pattern = /method [a-zA-Z][a-z-A-Z0-9]* requires \\(([[a-zA-Z][a-z-A-Z0-9]* [a-zA-Z][a-z-A-Z0-9]*])*\\) returns [a-zA-Z][a-z-A-Z0-9]*/;
    }

    parse(parentBlock, lexer) {
        lexer.nextToken(); // skip method token
        let name = lexer.nextToken().token;

        lexer.nextToken(); // skip requires token
        lexer.nextToken(); // skip ( token

        let first = lexer.nextToken();
        let params = [];

        if(first.token !== ')') {
            let paramData = [first, null];
            let token = null;

            while(lexer.hasNextToken() && (token = lexer.nextToken().token) !== ')') {
                if(paramData[0] === null) {
                    paramData[0] = token;
                } else {
                    paramData[1] = token;

                    params.push(new Parameter(type[paramData[0]], paramData[1]));
                }

                paramData = [null, null];
            }
        }

        lexer.nextToken(); // skip the returns token.

        let returnType = type[lexer.nextToken().token];

        return new Method(parentBlock, name, returnType, params);
    }
}