/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n === 0) return [];
    const dfs = (start, end) => {
        if (start > end) return [null];
        if (start === end) return [new TreeNode(start)];
        const result = [];
        for (let i = start; i <= end; i++) {
            let left = dfs(start, i - 1);
            let right = dfs(i + 1, end);
            for (let l of left) {
                for (let r of right) {
                    result.push(new TreeNode(i, l, r));
                }
            }
        }
        return result;
    }
    return dfs(1, n);
};
// @lc code=end

