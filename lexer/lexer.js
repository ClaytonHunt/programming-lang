const tokenType = require('./token-type').tokenType;
const Token = require('./token').Token;
const TokenData = require('./token-data').TokenData;

class Lexer {
  constructor(data) {
    this._pushBack = false;
    this._lastToken = null;
    this._tokenData = [];
    this._data = data;

    this._tokenData.push(new TokenData(/^[a-zA-Z][a-zA-Z0-9]*/, tokenType.identifier));
    this._tokenData.push(new TokenData(/^(-)?[0-9]+/, tokenType.integerLiteral));
    this._tokenData.push(new TokenData(/^".*"/, tokenType.stringLiteral));

    for (let t of [/^=/, /^\(/, /^\)/, /^\./, /^,/]) {
      this._tokenData.push(new TokenData(new RegExp(t), tokenType.token));
    }
  }

  nextToken() {
    this._data = this._data.trim();

    if (this._pushBack) {
      this._pushBack = false;
      return this._lastToken;
    }

    if (this._data.length === 0) {
      return this._lastToken = new Token('', tokenType.empty);
    }

    for (let i = 0; i < this._tokenData.length; i++) {
      let td = this._tokenData[i];

      if (td.pattern.test(this._data)) {
        let token = td.pattern.exec(this._data);
        this._data = this._data.substring(token[0].length).trim();

        if (td.type === tokenType.stringLiteral) {
          return this._lastToken = new Token(token[0].substring(1, token[0].length - 1), tokenType.stringLiteral);
        } else {
          return this._lastToken = new Token(token[0], td.type);
        }
      }
    }

    throw new Error(`Could not parse ${this._data}`);
  }

  hasNextToken() {
    return !(this._data.length === 0);
  }

  pushBack() {
    if (this._lastToken !== null) {
      this._pushBack = true;
    }
  }
}

module.exports = {
  Lexer: Lexer
};