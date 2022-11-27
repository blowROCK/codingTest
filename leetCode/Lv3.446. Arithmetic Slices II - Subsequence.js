// https://leetcode.com/problems/arithmetic-slices-ii-subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const cache = Array.from(Array(nums.length), () => new Map())
  let answer = 0;
  for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      let cache_i = cache[i].get(nums[i]-nums[j]) || 0;
      let cache_j = cache[j].get(nums[i]-nums[j]) || 0;
      cache[i].set(nums[i]-nums[j], cache_i + cache_j + 1)
      answer += cache_j;
    }
  }
  return answer
};