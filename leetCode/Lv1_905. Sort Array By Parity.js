// https://leetcode.com/problems/sort-array-by-parity/

var sortArrayByParity = function (nums) {
  let oddIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      [nums[i], nums[oddIdx]] = [nums[oddIdx], nums[i]];
      oddIdx++;
    }
  }

  return nums;
};
