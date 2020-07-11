/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    const dfs = (index, ...combos) => {
        if (index >= nums.length) return void result.push(combos);
        const n = nums[index];
        let count = 1;
        while (nums[++index] === n) count++;
        while (count >= 0) dfs(index, ...combos, ...Array(count--).fill(n));
    }
    dfs(0);
    return result;
};
// @lc code=end

