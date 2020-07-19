/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    let list = [1, ...nums, 1];
    let dp = Array.from({ length: list.length }, _ => Array(list.length).fill(0));
    for (let x = 2; x < list.length; x++) {
        for (let i = 0; i + x < list.length; i++) {
            const j = i + x;
            let max = 0;
            for (let k = i + 1; k < j; k++) {
                max = Math.max(dp[i][k] + list[i] * list[k] * list[j] + dp[k][j], max);
            }
            dp[i][j] = max;
        }
    }
    return dp[0][list.length - 1];
};
// @lc code=end

