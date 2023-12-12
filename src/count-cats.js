const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const ears = '^^';

  const countEars = (data) => {
    let count = 0;

    if (Array.isArray(data)) {
      data.forEach((elem) => (count += countEars(elem)));
    } else {
      return data === ears;
    }

    return count;
  };

  return countEars(matrix);
}

module.exports = {
  countCats,
};
