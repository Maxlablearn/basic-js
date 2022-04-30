const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  let m = matrix.map(e => e.map(eIn => {return eIn === true ? 1 : 0}));
  let result = matrix.slice();

  m.forEach(e => {e.unshift(0); e.push(0)});
  m.unshift(Array(m[0].length).fill(0));
  m.push(Array(m[0].length).fill(0));

  for (let i = 1; i < m.length - 1; i++) {
    for (let j = 1; j < m[0].length - 1; j++) {
      result[i-1][j-1] = m[i-1][j-1] + m[i-1][j] + m[i-1][j+1] + m[i][j-1] + m[i][j+1] + m[i+1][j-1] + m[i+1][j] + m[i+1][j+1];
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
