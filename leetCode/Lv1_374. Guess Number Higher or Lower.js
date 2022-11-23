// https://leetcode.com/problems/guess-number-higher-or-lower/

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let lower = 0;
  let higher = n;
  const find = (cur) => {
    let isGuess = guess(cur);
    let middle = 0;
    if(isGuess === 0) {
      return cur;
    } else if(isGuess === 1) {
      middle = Math.floor((cur + higher) / 2)
      lower = cur;
    } else {
      middle = Math.floor((lower + cur) / 2)
      higher = cur;
    }
    return find(middle);
  }
  return find(n);
};