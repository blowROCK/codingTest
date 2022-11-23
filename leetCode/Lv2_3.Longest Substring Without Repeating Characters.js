// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let word = [];
  let longest = 0;
  for(let str of s.split('')) {
    const idx = word.indexOf(str);
    if(idx > -1) {
      longest = Math.max(longest, word.length);
      word.splice(0, idx + 1);
    }
    word.push(str);
  }
  return Math.max(longest, word.length);
};