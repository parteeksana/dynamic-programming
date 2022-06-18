// Prime number
// A number which is divisble by itself only and 1

// isPrime(1) => false
// isPrime(2) => true
// isPrime(5) => true
// isPrime(4) => false

/**
 * @param {number} n
 * @return {boolean}
 */

var isPrime = function (n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

// DRY CODE

// isPrime(4) => false
// 4 % 2 === 0
// return false

// isPrime(7) => true
// 7 % 2 !== 0
// 7 % 3 !== 0
// 7 % 4 !== 0
// 7 % 5 !== 0
// 7 % 6 !== 0
// return true

// Time complexity
// Big-O => O(n) Linear complexity
