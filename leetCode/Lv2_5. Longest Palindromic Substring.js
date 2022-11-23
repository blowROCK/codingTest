// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const check = (str) => {
    if (str.length === 0) return false;
    let palindromic = true;
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        palindromic = false;
        break;
      }
    }
    return palindromic;
  };
  let answer = "";
  if (s.length === 1) return s;
  for (let i = s.length + 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (i - j + 1 > answer.length) {
        const word = s.slice(j, i);
        if (check(word)) {
          answer = word;
          break;
        }
      }
    }
  }
  return answer;
};
