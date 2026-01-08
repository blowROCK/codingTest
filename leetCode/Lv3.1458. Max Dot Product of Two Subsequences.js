/**
 * https://leetcode.com/problems/max-dot-product-of-two-subsequences
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function (nums1, nums2) {
    const n = nums1.length;
    const m = nums2.length;
    const dp = Array.from({ length: n }, () => Array(m).fill(-Infinity));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const currentMul = nums1[i] * nums2[j];

            dp[i][j] = currentMul;

            if (i > 0 && j > 0) {
                dp[i][j] = Math.max(dp[i][j], currentMul + dp[i - 1][j - 1]);
            }

            if (i > 0) dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
            if (j > 0) dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
        }
    }

    return dp[n - 1][m - 1];
};
