/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let max = 0, stack = [-1];
    [...heights, 0].forEach((h, i, array) => {
        while (array[stack[0]] > h) {
            max = Math.max(max, array[stack.shift()] * (i - stack[0] - 1));
        }
        stack.unshift(i);
    });
    return max;
};
// @lc code=end
export default largestRectangleArea;