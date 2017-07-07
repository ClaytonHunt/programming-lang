var Value = require('./value').Value;

// Represents a variable
class Variable extends Value {
    constructor(block, type, name, value) {
        super(type, value);

        this._block = block;
        this._name = name;
    }

    get block() {
        return this._block;
    }

    get name() {
        return this._name;
    }
}

module.exports = {
    Variable: Variable
};