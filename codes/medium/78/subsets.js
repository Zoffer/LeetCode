/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const setList = [];
    const dfs = (i, ...set) => {
        if (i === nums.length) return setList.push(set);
        dfs(i + 1, ...set);
        dfs(i + 1, ...set, nums[i]);
    }
    dfs(0);
    return setList;
};
// @lc code=end

