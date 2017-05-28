const fs = require('fs');
const Lexer = require('./lexer/lexer').Lexer;
const Parser = require('./parser').Parser;

let filename = process.argv[2];

class Compiler {
  constructor(filename) {
    this._filename = filename;
  }

  openFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, contents) => {
      if (err) {
        console.error(`\x1b[31mError: ${err.message}\x1b[0m`);
        return;
      }

      callback(contents);
    });
  }

  run() {
    this.openFile(filename, (data) => {
      let lex = new Lexer(data);
      let parser = new Parser();

      while (lex.hasNextToken()) {
        let token = lex.nextToken();

        console.log(token.token, '\t|', token.type);
      }

      //let ast = parser.run(tokens);
    });
  }
}

let compiler = new Compiler(filename);
compiler.run();