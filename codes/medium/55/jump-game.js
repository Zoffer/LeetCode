/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const target = nums.length - 1;
    let max = 0;
    let i = 0;
    while (i <= max) {
        max = Math.max(max, i + nums[i++]);
        if (max >= target) return true;
    }
    return false;
};
// @lc code=end

