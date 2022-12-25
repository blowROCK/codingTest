// https://leetcode.com/problems/longest-subsequence-with-limited-sum/description/

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
  nums.sort((a,b)=>a-b);
  const answer = [];
  for(const query of queries) {
    let sum = 0;
    let count = 0;
    for(const num of nums) {
      if(num + sum <= query){
        sum+=num;
        count++;
      } else break;
    }
    answer.push(count);
  }
  return answer;
};