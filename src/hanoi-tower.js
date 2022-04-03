const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let movies = 1;
  for (let i = 1; i < disksNumber; i++) {
    movies = movies * 2 + 1;
  }
  return {
    turns: movies,
    seconds: Math.floor(3600 * movies / turnsSpeed),
  }
}

module.exports = {
  calculateHanoi
};
