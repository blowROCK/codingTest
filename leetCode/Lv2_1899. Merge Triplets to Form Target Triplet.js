// https://leetcode.com/problems/merge-triplets-to-form-target-triplet/

/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
  let max = [0, 0, 0];
  for(let i = 0; i < triplets.length; i++) {
    if(triplets[i].every((n, idx) => n <= target[idx])){
      max = triplets[i].map((n, i) => Math.max(n, max[i]))
    }
  }
  return max.join('') === target.join('')
};