// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] === nums[j - 1]) {
      i++;
    } else {
      nums[j - i] = nums[j];
    }
  }
  return nums.length - i;
};