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
var largestRectangleArea = function (heights) {
    let maxArea = 0, stack = [-1];
    [...heights, 0].forEach((height, i) => {
        let last = stack.length - 1;
        while (heights[stack[last]] > height) {
            let h = heights[stack.pop()];
            let w = i - stack[--last] - 1
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    });
    return maxArea;
};
// @lc code=end
export default largestRectangleArea;