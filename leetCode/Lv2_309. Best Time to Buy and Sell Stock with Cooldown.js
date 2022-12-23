// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length;
  const dp = Array.from(Array(len), () => Array(3));
  dp[0][0] = 0; // sell
  dp[0][1] = -prices[0]; // buy
  dp[0][2] = 0; // cool

  for(let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i-1][1] + prices[i], dp[i-1][0]);
    dp[i][1] = Math.max(dp[i-1][2] - prices[i], dp[i-1][1]);
    dp[i][2] = Math.max(dp[i-1][0], dp[i-1][1], dp[i-1][2]);
  }
  return Math.max(dp[len-1][0], dp[len-1][1], dp[len-1][2]);
};