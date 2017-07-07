// Represents a variable type
const type = {
    // Absolutely nothing
    string: 'STRING',

    // A token. For example, () = ,
    integer: 'INTEGER',

    // First character is a letter, any proceeding characters are letters or numbers.
    boolean: 'BOOLEAN',
};

module.exports = {
    Type: type
};