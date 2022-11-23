// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  for(let i = strs[0].length - 1; i >= 0; i--) {
    const word = strs[0].substring(0, i+1);
    console.log(word)
    if(strs.every((str) => str.indexOf(word) === 0)) {
      return word;
    }
  }
  return '';
};