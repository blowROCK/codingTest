// https://leetcode.com/problems/132-pattern/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  let numK = -Infinity;
  let stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < numK) return true;

    while (stack.length && stack[stack.length - 1] < nums[i]) {
      numK = stack.pop();
    }

    stack.push(nums[i]);
  }
  return false;
};
