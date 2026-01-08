/**
 * https://leetcode.com/problems/pascals-triangle-ii
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const dp = Array.from({ length: rowIndex + 1 }, (_, i) => Array(i + 1).fill(1))
    for (let i = 2; i < rowIndex + 1; i++) {
        for (let j = 1; j < i; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }
    return dp[rowIndex]
};
