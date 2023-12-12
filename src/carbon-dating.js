const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const isString = (value) =>
    typeof value === 'string' || value instanceof String;
  const isValid = (num) => !isNaN(num) && num > 0 && num <= 15;

  if (!isString(sampleActivity)) {
    return false;
  }

  const num = parseFloat(sampleActivity);

  if (!isValid(num)) {
    return false;
  }

  return Math.ceil(
    (Math.log(MODERN_ACTIVITY / num) * HALF_LIFE_PERIOD) / 0.693
  );
}

module.exports = {
  dateSample,
};
