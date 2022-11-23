// https://leetcode.com/problems/number-of-valid-words-in-a-sentence/

/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
  const arr = sentence.split(/\s+/)
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(/^[a-z]+(-[a-z]+)?[\.!,]?$/.test(arr[i]) || /^[\.!,]$/.test(arr[i])) {
      count++;
    }
  }
  return count;
};