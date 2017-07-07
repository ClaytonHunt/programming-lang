class Parser {
    constructor() {
        this.pattern = /invalid pattern for parsing/;
    }

    // Takes a line and checks to see if it is for this parser by using regex
    shouldParse(line) {
        return this.pattern.test(line);
    }

    // Takes the superBlock and tokenizer for the line and return a block of this parser's type
    parse(superBlock, tokenizer) {
        throw new Error("parse function not implemented!");
    }
}

module.exports = {
    Parser: Parser
};