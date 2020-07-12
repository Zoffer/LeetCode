/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    const m = dungeon.length, n = dungeon[0].length;
    const dp = Array(n + 1).fill(Infinity);
    dp[n - 1] = 1;
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let cost = Math.min(dp[j + 1], dp[j]) - dungeon[i][j];
            dp[j] = Math.max(1, cost);
        }
    }
    return dp[0];
};
// @lc code=end

