let Block = require('./block').Block;

class Method extends Block {
    constructor(parentBlock, name, type, params) {
        super(parentBlock);

        this._name = "";
        this._type = type;
        this._params = params;
    }

    run() {
        this.invoke();
    }

    invoke(...values) {
        // Invoke the method with the supplied values.
    }
}

module.exports = {
    Method: Method
};