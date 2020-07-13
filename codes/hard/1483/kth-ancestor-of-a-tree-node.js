/*
 * @lc app=leetcode.cn id=1483 lang=javascript
 *
 * [1483] 树节点的第 K 个祖先
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function(n, parent) {
    const dp = [];
    for (let [i, p] of parent.entries()) {
        dp[i] = [p];
    }
    for (let i = 1; (1 << i) < n; i++) {
        for (let j = 0; j < n; j++) {
            let f = dp[j][i - 1];
            dp[j][i] = f < 0 ? -1 : dp[f][i - 1];
        }
    }
    this.dp = dp;
    this.size = Math.log2(n) | 0;
};

/** 
 * @param {number} node 
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function(node, k) {
    for (let i = this.size; i >= 0 && node >= 0; i--) {
        if ((1 << i) & k) node = this.dp[node][i];
    }
    return node;
};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
// @lc code=end

