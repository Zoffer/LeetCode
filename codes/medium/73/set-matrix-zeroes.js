/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    if (!matrix.length) return;
    let isTopFill = false;
    let m = matrix.length, n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                if (i === 0) {
                    isTopFill = true;
                } else {
                    matrix[i][0] = 0;
                }
            }
        }
    }
    for (let i = 1; i < m; i++) {
        if (matrix[i][0] === 0) matrix[i].fill(0);
    }
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] !== 0) continue;
        for (let i = 1; i < m; i++) matrix[i][j] = 0;
    }
    if (isTopFill) matrix[0].fill(0);
};
// @lc code=end
export default setZeroes;