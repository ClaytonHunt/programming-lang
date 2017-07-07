let Block = require('./block');

class Class extends Block {
    constructor(name) {
        super(null);

        this._name = name;
    }

    get name() {
        return this._name;
    }

    run() {
        // Run main method
    }
}

module.exports = {
    Class: Class
};