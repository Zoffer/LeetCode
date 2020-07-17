/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    if (!matrix.length) return 0;
    const M = matrix.length, N = matrix[0].length;
    const dp = Array.from({ length: M }, _ => Array(N).fill(0));
    let longest = 0;
    const dfs = (i, j) => {
        if (dp[i][j] > 0) return dp[i][j];
        let max = 0;
        if (i > 0 && matrix[i][j] < matrix[i - 1][j]) max = Math.max(max, dfs(i - 1, j));
        if (j > 0 && matrix[i][j] < matrix[i][j - 1]) max = Math.max(max, dfs(i, j - 1));
        if (i < M - 1 && matrix[i][j] < matrix[i + 1][j]) max = Math.max(max, dfs(i + 1, j));
        if (j < N - 1 && matrix[i][j] < matrix[i][j + 1]) max = Math.max(max, dfs(i, j + 1));
        dp[i][j] = ++max;
        return max;
    }
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (dp[i][j] === 0) longest = Math.max(dfs(i, j), longest);
        }
    }
    return longest;
};
// @lc code=end

