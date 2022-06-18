// Power of Two
// Question => https://leetcode.com/problems/power-of-two/

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1

// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16

// Example 3:

// Input: n = 3
// Output: false

/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function (n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }

  return true;
};

// DRY CODE

// isPowerOfTwo(4) => true
// 4 % 2 === 0
// n = 4 / 2 = 2
// 2 % 2 === 0
// n = 2 / 2 = 1
// true

// isPowerOfTwo(5) => false
// 5 % 2 !== 0
// false

// Time complexity
// Big-O => O(log(n)) Logarithmic complexity
