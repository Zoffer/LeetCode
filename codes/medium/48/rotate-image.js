/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length - 1;
    let i = 0, left = 0, right = n;
    while (left < right) {
        for (let j = left; j < right; j++) {
            const tmp = matrix[i][j];
            matrix[i][j] = matrix[n - j][i];
            matrix[n - j][i] = matrix[n - i][n - j];
            matrix[n - i][n - j] = matrix[j][n - i];
            matrix[j][n - i] = tmp;
        }
        left++, right--, i++;
    }
};
// @lc code=end
export default rotate;