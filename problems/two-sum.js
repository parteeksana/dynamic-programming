// 1. Two Sum
// Question - https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the two numbers such that they
// add up to a specific target.

// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.

// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// METHOD 1
var twoSum = function (nums, target) {
  let indexes = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indexes.push(i, j);
      }
    }
  }

  return indexes;
};

// METHOD 2
var twoSum = function (nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (hashMap.has(difference)) {
      return [hashMap.get(difference), i];
    }

    hashMap.set(nums[i], i);
  }
};
