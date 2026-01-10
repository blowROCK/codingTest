/**
 * https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
    const dp = Array.from({ length: s1.length + 1 }, (_, i) => Array(s2.length + 1).fill(0))
    for (let i = 0; i < s1.length + 1; i++) {
        for (let j = 0; j < s2.length + 1; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = 0;
            } else if (i === 0) {
                dp[i][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
            } else if (j === 0) {
                dp[i][j] = dp[i - 1][0] + s1.charCodeAt(i - 1);
            } else if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + s1.charCodeAt(i - 1),
                    dp[i][j - 1] + s2.charCodeAt(j - 1)
                )
            }
        }
    }
    return dp[s1.length][s2.length]
};
