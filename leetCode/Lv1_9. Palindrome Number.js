// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = String(x).split("");
  const len = str.length / 2;
  let awnser = true;
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      awnser = false;
      break;
    }
  }
  return awnser;
};
