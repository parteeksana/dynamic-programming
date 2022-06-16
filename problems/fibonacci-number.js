// 3. Fibonacci Number
// Question - https://leetcode.com/problems/fibonacci-number/

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n) {
  let sum = 0;
  let num1 = 0;
  let num2 = 1;

  if (n === 0) {
    sum = 0;
  } else if (n === 1) {
    sum = 1;
  } else {
    for (let i = 1; i < n; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
  }

  return sum;
};
