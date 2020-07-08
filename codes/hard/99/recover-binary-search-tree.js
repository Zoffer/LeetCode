/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let last_node = null;
    let mistake_node = null;
    const iteractor = (node) => {
        if (node === null) return;
        iteractor(node.left);
        if (mistake_node === null) {
            if (last_node && last_node.val > node.val) mistake_node = last_node;
        } else {
            if (mistake_node.val < node.val) return;
        }
        last_node = node;
        iteractor(node.right);
    };
    iteractor(root);
    [last_node.val, mistake_node.val] = [mistake_node.val, last_node.val];
};
// @lc code=end
export default recoverTree;