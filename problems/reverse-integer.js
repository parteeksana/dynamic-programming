// 2. Reverse Integer
// Question - https://leetcode.com/problems/reverse-integer/

// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
// then return 0.

// Example 1:

// Input: x = 123
// Output: 321

// Example 2:

// Input: x = -123
// Output: -321

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  let reverseNumber = 0;
  let num = Math.abs(x);

  while (num > 0) {
    reverseNumber = reverseNumber * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  if (reverseNumber < INT_MIN || reverseNumber > INT_MAX) {
    return 0;
  }

  if (x > 0) {
    return reverseNumber;
  } else {
    return -reverseNumber;
  }
};
