// https://leetcode.com/problems/largest-substring-between-two-equal-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const map = {};
  let maxLength = -1;
  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    if (map[str] !== undefined) {
      maxLength = Math.max(maxLength, i - map[str] - 1);
    } else {
      map[str] = i;
    }
  }
  return maxLength;
};
