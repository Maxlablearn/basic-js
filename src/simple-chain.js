const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  oldChain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push('' + value);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position < 1 || position > this.chain.length -1 ) {
      console.log('---throw---  position = ', position,'   chain length = ', this.chain.length);
      this.chain = [];
      throw new Error("You can't remove incorrect link!")};
    this.chain = this.chain.slice(0, position -1).concat(this.chain.slice(position));
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.oldChain = this.chain;
    this.chain = []
    return `( ${this.oldChain.join(' )~~( ')} )`
  }
};

module.exports = {
  chainMaker
};
