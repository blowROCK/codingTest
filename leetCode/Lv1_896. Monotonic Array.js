// https://leetcode.com/problems/monotonic-array/?envType=daily-question&envId=2023-09-29

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let increase = true;
  let decrease = true;
  for (let i = 1; i < nums.length; i++) {
    const [n1, n2] = [nums[i - 1], nums[i]];
    if (n1 > n2) increase = false;
    if (n1 < n2) decrease = false;
  }
  return increase || decrease;
};
