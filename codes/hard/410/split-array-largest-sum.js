/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    let low = 0, high = 0;
    for (const n of nums) {
        high += n;
        if (low < n) low = n;
    }
    while (low < high) {
        const x = Math.floor((low + high) / 2);
        let sum = 0;
        let count = 1;
        for (const n of nums) {
            if (sum + n <= x) {
                sum += n;
            } else {
                sum = n;
                count++;
            }
        }
        if (count > m) {
            low = x + 1;
        } else {
            high = x;
        }
    }
    return low;
};
// @lc code=end

