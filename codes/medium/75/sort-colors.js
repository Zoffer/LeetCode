/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let left = 0, right = nums.length - 1;
    for (let i = 0; i <= right;) {
        if (nums[i] === 0) {
            [nums[left], nums[i]] = [0, nums[left]];
            i++;
            left++;
        } else if (nums[i] === 2) {
            [nums[right], nums[i]] = [2, nums[right]];
            right--;
        } else {
            i++;
        }
    }
};
// @lc code=end

