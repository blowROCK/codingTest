// https://leetcode.com/problems/sum-of-subarray-minimums/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
// var sumSubarrayMins = function(arr) {
//   const MOD = 1e9 + 7;
//   let sum = 0;
//   for(let len = 1; len <= arr.length; len++) {
//     for(let idx = 0; idx < arr.length - len + 1; idx++) {
//       let temp = [];
//       for(let i = 0; i < len; i++){
//         temp.push(arr[idx+i])
//       }
//       sum += Math.min(...temp)
//       temp = [];
//     } 
//   }
//   return sum % MOD;
// };

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  const MOD = 1e9 + 7;
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for(let j = i; j < arr.length; j++){
      min = Math.min(min, arr[j]);
      sum += min;
    }
  }
  return sum % MOD;
};