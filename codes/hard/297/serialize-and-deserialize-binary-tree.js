/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// @lc code=start
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const queue = [root];
    const result = [];
    while (queue.length) {
        const node = queue.shift();
        if (node !== null) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (!data) return null;
    const valList = data.split(",");
    const root = new TreeNode(Number(valList[0]));
    const queue = [root];
    let i = 0;
    while (i < valList.length) {
        let node = queue.shift();
        let left_val = valList[++i];
        let right_val = valList[++i];
        if (left_val) {
            node.left = new TreeNode(Number(left_val));
            queue.push(node.left);
        }
        if (right_val) {
            node.right = new TreeNode(Number(right_val));
            queue.push(node.right);
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
export { serialize, deserialize }
