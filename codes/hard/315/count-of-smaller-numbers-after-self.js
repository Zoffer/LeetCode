/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    if (nums.length === 0) return [];
    const BITree = new BinaryIndexedTree(nums);
    const result = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        let n = nums[i];
        result[i] = BITree.sum(n);
        BITree.add(n);
    }
    return result;
};

class BinaryIndexedTree {
    /**
     * 
     * @param {number []} nums 
     */
    constructor(nums) {
        this.ids = new Map([...new Set(nums)].sort((a, b) => a - b).map((v, k) => [v, k + 1]));
        this.tree = Array(this.ids.size + 1).fill(0);
    }
    lowbit(x) {
        return x & -x;
    }
    add(num) {
        let id = this.ids.get(num);
        while (id < this.tree.length) {
            this.tree[id]++;
            id += this.lowbit(id);
        }
    }
    sum(num) {
        let id = this.ids.get(num) - 1;
        let count = 0;
        while (id > 0) {
            count += this.tree[id];
            id -= this.lowbit(id)
        }
        return count;
    }
}
// @lc code=end
export default countSmaller;