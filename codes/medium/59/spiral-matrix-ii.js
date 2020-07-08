/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let count = 0;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    let matrix = Array.from({length: n}, () => Array(n));
    while (true) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = ++count;
        }
        if (++top > bottom) break;
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = ++count;
        }
        if (left > --right) break;
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = ++count;
        }
        if (top > --bottom) break;
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = ++count;
        }
        if (left++ > right) break;
    }
    return matrix;
};
// @lc code=end

