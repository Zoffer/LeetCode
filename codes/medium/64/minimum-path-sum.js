/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    if (!grid.length) return 0;
    const m = grid.length, n = grid[0].length;
    const dp = [0];
    for (let i = 0; i < n; i++) {
        dp[i + 1] = grid[0][i] + dp[i];
    }
    dp[0] = Infinity;
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[j + 1] = grid[i][j] + Math.min(dp[j + 1], dp[j]);
        }
    }
    return dp[n];
};
// @lc code=end

