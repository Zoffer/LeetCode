/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const column = new Set();
    const diagonal_1 = new Set();
    const diagonal_2 = new Set();
    const solutions = [];
    function dfs(...solu) {
        if (solu.length === n) {
            solutions.push(solu)
            return;
        };
        let i = solu.length;
        for (let j = 0; j < n; j++) {
            if (column.has(j) || diagonal_1.has(i + j) || diagonal_2.has(i - j)) continue;
            column.add(j);
            diagonal_1.add(i + j);
            diagonal_2.add(i - j);
            dfs(...solu,`${".".repeat(j)}Q${".".repeat(n - j - 1)}`)
            column.delete(j);
            diagonal_1.delete(i + j);
            diagonal_2.delete(i - j);
        }
    }
    dfs();
    return solutions;
};
// @lc code=end
export default solveNQueens;