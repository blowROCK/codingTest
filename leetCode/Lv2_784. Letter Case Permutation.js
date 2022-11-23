// https://leetcode.com/problems/letter-case-permutation/description/

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  const answer = []
  const dfs = (index, cur) => {
    if(index === s.length){
      answer.push(cur);
      return;
    }
    if(/^[a-z]|[A-Z]/.test(s[index])){
      dfs(index+1, cur + s[index].toUpperCase());
      dfs(index+1, cur + s[index].toLowerCase());
    } else {
      dfs(index+1, cur + s[index]);
    }
  }
  dfs(0, '');
  return answer;
};