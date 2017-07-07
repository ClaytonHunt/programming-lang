let Block = require('./block').Block;

class Method extends Block {
    constructor(parentBlock) {
        super(parentBlock);

        this._name = "";
        this._type;
        this._params;
        this._returnValue;
    }

    run() {
        // TODO: fill this in
    }
}