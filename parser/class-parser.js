let Class = require('../blocks/class-block').Class;

class ClassParser extends Parser {
    constructor() {
        super();

        this.pattern = /class [a-zA-Z][a-z-A-Z0-9]*/;
    }

    parse(parentBlock, lexer) {
        lexer.nextToken(); // skip class token
        let name = lexer.nextToken().token;

        return new Class(name);
    }
}