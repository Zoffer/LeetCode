/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const result = [];
    const stack = [];
    let cursor = root;
    while (cursor || stack.length) {
        while (cursor) {
            stack.push(cursor);
            cursor = cursor.left;
        }
        let node = stack.pop();
        result.push(node.val);
        cursor = node.right;
    }
    return result;
};
// @lc code=end

