/**
 * Adds two numbers and returns their sum.
 * Throws a TypeError for non-numeric, null, or undefined inputs.
 *
 * Examples:
 *   addNumbers(5, 3) // => 8
 *   addNumbers('5', 3) // throws TypeError
 */
function addNumbers(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    throw new TypeError('addNumbers requires two numeric arguments but received null or undefined');
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError(`addNumbers expects arguments of type number, received ${typeof a} and ${typeof b}`);
  }

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('addNumbers expects finite numbers (not NaN or Infinity)');
  }

  return a + b;
}

module.exports = addNumbers;
