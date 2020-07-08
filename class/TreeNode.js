class TreeNode {
    /**
     * 
     * @param {number} val
     * @param {TreeNode} left
     * @param {TreeNode} right 
     */
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    /**
     * Encodes a tree to a array.
     *
     * @param {TreeNode} root
     * @return {number[]}
     */
    static encode(root) {
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
        while (result.length > 0 && result[result.length - 1] === null) result.pop();
        return result;
    }
    /**
     * Decodes array to tree.
     *
     * @param {number[]} valList
     * @return {TreeNode}
     */
    static decode(valList) {
        if (!valList.length) return null;
        const root = new TreeNode(valList[0]);
        const queue = [root];
        let cursor = 0;
        while (cursor < valList.length) {
            let node = queue.shift();
            let left_val = valList[++cursor];
            let right_val = valList[++cursor];
            if (left_val != null) {
                node.left = new TreeNode(left_val);
                queue.push(node.left);
            }
            if (right_val != null) {
                node.right = new TreeNode(right_val);
                queue.push(node.right);
            }
        }
        return root;
    }
}

export default TreeNode;