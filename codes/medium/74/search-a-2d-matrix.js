/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix.length) return false;
    const m = matrix.length, n = matrix[0].length;
    let start = 0; end = m * n - 1;
    while (start <= end) {
        let mid = (start + end) >> 1;
        let x = matrix[Math.floor(mid / n)][mid % n];
        if (x === target) return true;
        if (x > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
};
// @lc code=end

