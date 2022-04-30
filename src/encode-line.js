const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  if (!str.length) return '';
  
  let result = [];
  let count = 1;
  let letter = str[0];

  for (let i = 1; i < str.length; i++) {
    
    if (str[i] !== letter ) {
      count === 1? result.push(letter) : result.push(count + letter);
      count = 1;
      letter = str[i];
    } else {
      count++;
    }

    if (i === str.length - 1) {
      count === 1? result.push(letter) : result.push(count + letter);
    }
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
