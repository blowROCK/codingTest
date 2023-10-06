// https://leetcode.com/problems/integer-break/description/

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 2 || n === 3) return n - 1;
  let result = 1;
  while (n > 4) {
    result *= 3;
    n -= 3;
  }
  return result * n;
};

// 여긴 예외
// 2: 1 1 = 1
// 3: 2 1 = 2
// 4: 2 2

// 그냥 3이 많으면된다.
// 5: 3 2
// 6: 3 3
// 7: 3 2 2
// 8: 3 3 2
// 9: 3 3 3
// 10: 3 3 2 2
// 11: 3 3 3 2
