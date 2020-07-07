/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    const dp = Array.from({ length: s1.length + 1 }, () => Array(s2.length + 1).fill(false));
    dp[0][0] = true;
    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            if (dp[i][j] && i + j < s3.length) {
                if (s1[i] === s3[i + j]) dp[i + 1][j] = true;
                if (s2[j] === s3[i + j]) dp[i][j + 1] = true;
            }
        }
    }
    return dp[s1.length][s2.length];
};
// @lc code=end
export default isInterleave;