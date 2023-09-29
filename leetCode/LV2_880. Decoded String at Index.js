// https://leetcode.com/problems/decoded-string-at-index/

var decodeAtIndex = function (s, k) {
  let size = 0;
  for (const letter of s) {
    size = isNaN(letter) ? size + 1 : letter * size;
  }
  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i];
    k %= size;

    if (k === 0 && isNaN(char)) {
      return char;
    } else if (!isNaN(char)) {
      size /= +char;
    } else {
      size--;
    }
  }
  return s[1];
};
