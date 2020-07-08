/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    return helper(root, -Infinity, Infinity);
};

function helper(node, min, max) {
    if (node === null) return true;
    if (node.val <= min || node.val >= max) return false;
    return helper(node.left, min, node.val) && helper(node.right, node.val, max);
}
// @lc code=end

