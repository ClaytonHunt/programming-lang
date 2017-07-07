// Represents a value
class Value {
    constructor(type, value) {
        this._type = type;
        this._value = value;
    }

    get type() {
        return this._type;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }
}

module.exports = {
    Value:Value
};