/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    let len = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; nums[i] <= 0; i++) {
        let a = nums[i];
        if (a === nums[i - 1]) {
            continue;
        }
        let left = i + 1, right = len - 1;
        while (left < right) {
            let b = nums[left];
            let c = nums[right];
            let x = a + b + c;
            if (x === 0) {
                result.push([a, b, c]);
                while (b === nums[left + 1]) {
                    left++;
                }
                while (c === nums[right - 1]) {
                    right--;
                }
            }
            if (x >= 0) {
                right--;
            }
            if (x <= 0) {
                left++;
            }
        }
    }
    return result;
};
// @lc code=end
export default threeSum;

