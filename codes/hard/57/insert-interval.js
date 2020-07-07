/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let [start, end] = newInterval;
    let s_i = 0, e_i = intervals.length;
    for (let i = 0; i < intervals.length; i++) {
        let item = intervals[i];
        if (item[1] < start) {
            s_i = i + 1;
        } else {
            start = Math.min(item[0], start);
            break;
        }
    }
    for (let i = intervals.length - 1; i >= 0; i--) {
        let item = intervals[i];
        if (item[0] > end) {
            e_i = i;
        } else {
            end = Math.max(item[1], end);
            break;
        }
    }
    intervals.splice(s_i, e_i - s_i, [start, end]);
    return intervals;
};
// @lc code=end
export default insert;