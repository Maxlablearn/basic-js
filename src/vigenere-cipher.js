const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true){
    this.reverse = reverse;
  }
  encrypt(string, keyLow) {
    if (string === undefined || keyLow === undefined) throw new Error('Incorrect arguments!');

    let result = [];
    const inArray = string.toUpperCase();
    const key = keyLow.toUpperCase();
    let chars = 0;

    for (let i = 0; i < inArray.length; i++) {
      if (inArray[i].charCodeAt() < 65 || inArray[i].charCodeAt() > 90) {
        result.push(inArray[i]);
      } else {
        result.push(String.fromCharCode((inArray[i].charCodeAt() + key[chars % (key.length)].charCodeAt() - 130) % 26 + 65));
        chars++;
      }
    }
    return this.reverse === true ? result.join('') : result.reverse().join('');
  }

  decrypt(code, keyLow) {
    if (code === undefined || keyLow === undefined) throw new Error('Incorrect arguments!');

    let result = [];
    const key = keyLow.toUpperCase();
    let chars = 0;

    for (let i = 0; i < code.length; i++) {
      if (code[i].charCodeAt() < 65 || code[i].charCodeAt() > 90) {
        result.push(code[i]);
      } else {
        result.push(String.fromCharCode((code[i].charCodeAt() + 26 - key[chars % (key.length)].charCodeAt()) % 26 + 65));
        chars++;
      }
    }
    return this.reverse === true ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
