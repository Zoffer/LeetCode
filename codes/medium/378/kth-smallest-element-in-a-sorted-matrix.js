/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let n = matrix.length;
    let min = matrix[0][0];
    let max = matrix[n - 1][n - 1];
    while (min < max) {
        let mid = (min + max) >> 1;
        let count = 0;
        let i = 0, j = n - 1;
        while (i < n && j >= 0) {
            if (matrix[i][j] <= mid) {
                i++;
                count += j + 1;
            } else {
                j--;
            }
        }
        if (count < k) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }
    return min;
};
// @lc code=end
export default kthSmallest;