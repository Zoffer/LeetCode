/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        const l = nums[left], r = nums[right], m = nums[mid];
        if ([l, m, r].includes(target)) return true;
        if (l < m) {
            if (l < target && target < m) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (m < r) {
            if (m < target && target < r) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            left++, right--;
        }
    }
    return false;
};
// @lc code=end
export default search;