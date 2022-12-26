// https://leetcode.com/problems/jump-game/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let end = nums[0];
  for(let i=1; i<nums.length; i++) {   
    if (end < i) break;
    if (end < nums[i] + i) end = nums[i] + i;        
  }
  return end >= nums.length - 1;
};
