/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let behind = 0, ahead = 0;
    while (++ahead < nums.length) {
        if (nums[behind] !== nums[ahead] || nums[behind - 1] !== nums[behind]) nums[++behind] = nums[ahead];
    }
    return behind + 1;
};
// @lc code=end

