// https://leetcode.com/problems/minimum-average-difference/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function (nums) {
  let minimun = Infinity;
  let answer = null;
  let aSum = 0;
  let bSum = nums.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < nums.length; i++) {
    aSum += nums[i];
    bSum -= nums[i];
    const a = Math.floor(aSum / (i + 1));
    const b = Math.floor(bSum / (nums.length - i - 1) || 0);
    const min = Math.abs(a - b);
    if (minimun > min) {
      minimun = min;
      answer = i;
    }
  }
  return answer;
};

// var minimumAverageDifference = function(nums) {
//   let minimun = Infinity;
//   let answer = null;
//   for(let i = 1; i < nums.length+1; i++) {
//     const a = Math.floor(nums.slice(0, i).reduce((acc, cur)=>acc+cur,0) / i);
//     const b = Math.floor(nums.slice(i).reduce((acc, cur)=>acc+cur,0) / (nums.length - i) || 0);
//     const min = Math.abs(a - b);
//     if(minimun > min) {
//       minimun = min;
//       answer = i - 1;
//     }
//   }
//   return answer;
// };
