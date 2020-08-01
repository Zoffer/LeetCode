/*
 * @lc app=leetcode.cn id=632 lang=javascript
 *
 * [632] 最小区间
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
    const pq = new PriorityQueue(
        ([i1, j1], [i2, j2]) => nums[i1][j1] - nums[i2][j2]
    );
    let minRange = [-Infinity, Infinity];
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        pq.offer([i, 0]);
        max = Math.max(nums[i][0], max);
    }
    while (true) {
        const [i, j] = pq.poll();
        if (minRange[1] - minRange[0] > max - nums[i][j]) {
            minRange = [nums[i][j], max];
        }
        if (j + 1 >= nums[i].length) break;
        pq.offer([i, j + 1]);
        max = Math.max(max, nums[i][j + 1]);
    }
    return minRange;
};

class PriorityQueue {
    constructor(compare) {
        this.tree = [null];
        this.compare = compare;
    }
    get size() {
        return this.tree.length - 1;
    }
    offer(item) {
        this.tree.push(item);
        this.up();
    }
    poll() {
        if (!this.size) return;
        const result = this.tree[1];
        const bottom = this.tree.pop();
        if (this.size) {
            this.tree[1] = bottom;
            this.down();
        }
        return result;
    }
    up(i = this.size) {
        const tree = this.tree;
        while (i > 1) {
            const father = i >> 1;
            if (this.compare(tree[father], tree[i]) <= 0) break;
            [tree[i], tree[father], i] = [tree[father], tree[i], father];
        }
    }
    down(i = 1) {
        const tree = this.tree;
        while ((i << 1) < tree.length) {
            let child = i << 1;
            if (
                child + 1 < tree.length &&
                this.compare(tree[child], tree[child + 1]) > 0
            ) {
                child += 1;
            }
            if (this.compare(tree[i], tree[child]) <= 0) break;
            [tree[i], tree[child], i] = [tree[child], tree[i], child];
        }
    }
}
// @lc code=end
