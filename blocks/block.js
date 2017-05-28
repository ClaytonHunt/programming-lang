const Block = function(parentBlock) {
  let childBlocks = [];

  this.getParentBlock = function() {
    return parentBlock;
  };

  this.addBlock = function(block) {
    childBlocks.push(block);
  };

  this.run = function() {
    throw new Error('run function not implemented');
  };
};

module.exports = Block;