/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    const dp = Array.from({ length: t.length + 1 }, _ => Array(s.length + 1).fill(0));
    dp[0].fill(1);
    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (t[i] === s[j]) {
                dp[i + 1][j + 1] = dp[i][j] + dp[i + 1][j];
            } else {
                dp[i + 1][j + 1] = dp[i + 1][j];
            }
        }
    }
    return dp[t.length][s.length];
};
// @lc code=end

