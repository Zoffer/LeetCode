/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (let inter of intervals) {
        let last = result[result.length - 1];
        if (inter[0] <= last[1]) {
            last[1] = Math.max(last[1], inter[1]);
        } else {
            result.push(inter);
        }
    }
    return result;
};
// @lc code=end

