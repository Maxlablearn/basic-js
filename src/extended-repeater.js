const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
 
  let result = [];
  const count1 = options.repeatTimes || 1;
  const count2 = options.additionRepeatTimes || 1;
  const sep1 = options.separator === undefined? '+' : '' + options.separator;
  const sep2 = options.additionSeparator === undefined? '|' : '' + options.additionSeparator;
  const add = options.addition === undefined? '' : ''+options.addition;

  for (let i = 0; i < count1; i++) {
    result.push(''+str);

    for (let j = 0; j < count2; j++) {
      result.push(''+add);
      if (j !== count2 -1) {
        result.push(''+sep2);
      }
    }

    if (i !== count1 - 1) {
      result.push(''+sep1);
    }
  }

  return result.join('')
}

module.exports = {
  repeater
};
