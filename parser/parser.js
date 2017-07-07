class Parser {

    // Takes a line and checks to see if it is for this parser by using regex
    shouldParse(line) {
        throw new Error("shouldParse function not implemented!");
    }

    // Takes the superBlock and tokenizer for the line and return a block of this parser's type
    parse(superBlock, tokenizer) {
        throw new Error("parse function not implemented!");
    }
}

module.exports = {
    Parser: Parser
};