class Block {
  constructor(parentBlock) {
    this._parentBlock = parentBlock;
    this.childBlocks = [];
  }

  get parentBlock() {
    return this._parentBlock;
  };

  addBlock(block) {
    this.childBlocks.push(block);
  };

  run() {
    throw new Error('run function not implemented');
  };
}

module.exports = Block;