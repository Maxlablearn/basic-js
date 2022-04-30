const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) { return {}};

  const reverse = domains.map(e => {return e.split('.').reverse()}).sort((a,b) => b.length - a.length);
  let result = {};
  let sum;
  let elem;
  elements = '';

  for (let i = 0; i < reverse[0].length; i++) {
    sum = 1;
    elem = reverse[0][i];

    for (let j = 1; j < reverse.length; j++) {
      if (reverse[j][i] === elem) {
        sum ++;
      }
    }
    
    elements += `.${elem}`;
    result[elements] = sum;
  }
  return result;
}

module.exports = {
  getDNSStats
};
