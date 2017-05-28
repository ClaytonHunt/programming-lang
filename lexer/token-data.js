class TokenData  {
  constructor(pattern, type) {
    this._pattern = pattern;
    this._type = type;
  }

  get pattern() {
    return this._pattern;
  }

  get type() {
    return this._type;
  }
}

module.exports = {
  TokenData: TokenData
};