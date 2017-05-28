const tokenType = {
  // Absolutely nothing
  empty: 'EMPTY',

  // A token. For example, () = ,
  token: 'TOKEN',

  // First character is a letter, any proceeding characters are letters or numbers.
  identifier: 'IDENTIFIER',

  // A number
  integerLiteral: 'INTEGER LITERAL',

  // Anything enclosed in double quotes. "Hello" "1"
  stringLiteral: 'STRING LITERAL'
};

module.exports = {
  tokenType: tokenType
};