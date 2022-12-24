// https://leetcode.com/problems/domino-and-tromino-tiling/description/

/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
  if(n < 3) return n;
  const MOD = 1e9 + 7;
  // dp[i] = 2dp[i-1] + dp[i-3]
  const dp = [1, 2, 5];
  for(let i = 3; i < n; i++) {
    dp.push((2 * dp[i-1] + dp[i-3]) % MOD)
  }
  return dp[n-1];
};