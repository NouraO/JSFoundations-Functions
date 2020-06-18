/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Michael") logs "Hello Michael"
 */
function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Noura Al-Obaidly");

//_______________

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */

function isOdd(n) {
  if (n % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
isOdd(7);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */

function oddsSmallerThan(n) {
  if (isOdd(n)) {
    return (n - 1) / 2;
  } else {
    return n / 2;
  }
}
oddsSmallerThan(3);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */

function squareOrDouble(n) {
  if (isOdd(n)) {
    return n * n;
  } else {
    return n * 2;
  }
}
squareOrDouble(3);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
