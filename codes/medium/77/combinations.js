/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const combinations = [];
    const dfs = (min, kk, ...nums) => {
        if (kk === 0) return combinations.push(nums);
        kk--;
        for (let i = min; i <= n - kk; i++) {
            dfs(i + 1, kk, ...nums, i);
        }
    };
    dfs(1, k);
    return combinations;
};
// @lc code=end

