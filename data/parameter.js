// Represents a parameter
class Parameter {
    constructor(type, name) {
        this._type = type;
        this._name = name;
    }

    get type() {
        return this._type;
    }

    get name() {
        return this._name;
    }
}

module.exports = {
    Parameter: Parameter
};