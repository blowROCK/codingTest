// https://leetcode.com/problems/climbing-stairs/

var climbStairs = function (n) {
  if (n < 3) return n;
  const arr = [1, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};