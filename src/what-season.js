const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(inDate) {
  if (inDate === undefined) {
    return 'Unable to determine the time of year!'
  };
  if ((!(inDate instanceof Date) || Object.getOwnPropertyNames(inDate).length > 0) && arguments.length > 0) {
    throw new Error('Invalid date!');
  }
  let date = new Date(inDate);
  const seasons = {
    0: 'winter', 1: 'winter', 11: 'winter',
    2: 'spring', 3: 'spring', 4: 'spring',
    5: 'summer', 6: 'summer', 7: 'summer',
    8: 'fall', 9: 'fall', 10: 'fall',  
  }
  return seasons[date.getMonth()];
}

module.exports = {
  getSeason
};
