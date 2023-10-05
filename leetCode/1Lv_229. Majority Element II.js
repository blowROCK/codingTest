// https://leetcode.com/problems/majority-element-ii
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map = new Map()
    const condition = nums.length/3

    for(let i = 0 ; i < nums.length; i++){
      if(!map.has(nums[i])) map.set(nums[i], 0)
      map.set(nums[i], map.get(nums[i]) + 1)
    }
  
  return [...map].filter(([key,n]) => n>condition).map((z)=>z[0])
};
