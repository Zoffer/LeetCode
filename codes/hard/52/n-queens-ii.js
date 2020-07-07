/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    const column = new Set();
    const diagonal_1 = new Set();
    const diagonal_2 = new Set();
    let count = 0;
    function dfs(i) {
        if (i === n) return count++;
        for (let j = 0; j < n; j++) {
            if (column.has(j) || diagonal_1.has(i + j) || diagonal_2.has(i - j)) continue;
            column.add(j);
            diagonal_1.add(i + j);
            diagonal_2.add(i - j);
            dfs(i + 1);
            column.delete(j);
            diagonal_1.delete(i + j);
            diagonal_2.delete(i - j);
        }
    }
    dfs(0);
    return count;
};
// @lc code=end

