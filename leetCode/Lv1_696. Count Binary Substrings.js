// https://leetcode.com/problems/count-binary-substrings/

countBinarySubstrings = (s) =>
  s.replace(/01/g, "0,1")
    .replace(/10/g, "1,0")
    .split(",")
    .reduce((res, a, i, arr) => {
      return i ? res + Math.min(a.length, arr[--i].length) : 0;
    }, 0);