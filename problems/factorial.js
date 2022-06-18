// Factorial of a number
// The factorial of a number is the product of all the integers from 1 to that number

// factorial of 0 is 1
// factorial of 4 is 4*3*2*1 = 24
// factorial of 5 is 5*4*3*2*1 = 120

/**
 * @param {number} n
 * @return {number}
 */

// METHOD 1 - FOR LOOP
var factorial = function (n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
};

// Time complexity
// Big-O => O(n) Linear complexity

// METHOD 2 - RECURSIVE
var factorial = function (n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Time complexity
// Big-O => O(n) Linear complexity
