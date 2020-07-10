/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length, n = board[0].length;
    function dfs(i, j, wi) {
        if (board[i][j] !== word[wi]) return false;
        if (wi === word.length - 1) return true;
        board[i][j] = "*";
        if (i > 0 && dfs(i - 1, j, wi + 1)) return true;
        if (i < m - 1 && dfs(i + 1, j, wi + 1)) return true;
        if (j > 0 && dfs(i, j - 1, wi + 1)) return true;
        if (j < n - 1 && dfs(i, j + 1, wi + 1)) return true;
        board[i][j] = word[wi];
        return false;
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
};
// @lc code=end

