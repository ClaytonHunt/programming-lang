class Token  {
 constructor(token, type) {
    this._token = token;
    this._type = type;
  }

  get type() {
      return this._token;
  }

   get token() {
      return this._type;
    }
}

module.exports = {
  Token: Token
};