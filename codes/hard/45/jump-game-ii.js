/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let step = 0;
    let farthest = 0;
    for (let i = 0, j = 0, n = nums.length - 1; j < n; i++) {
        farthest = Math.max(farthest, nums[i] + i);
        if (i === j) {
            step++;
            j = farthest;
        }
    }
    return step;
};
// @lc code=end
export default jump;