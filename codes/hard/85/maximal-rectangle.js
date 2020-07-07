/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    if (!matrix.length) return 0;
    const m = matrix.length, n = matrix[0].length;
    const dp = Array(n + 1).fill(0);
    let maxArea = 0;
    for (let i = 0; i < m; i++) {
        const stack = [-1];
        for (let j = 0; j <= n; j++) {
            let height = dp[j] = matrix[i][j] === "1" ? dp[j] + 1 : 0;
            let last  = stack.length - 1;
            while(height < dp[stack[last]]) {
                let h = dp[stack.pop()];
                let w = j - stack[--last] - 1;
                maxArea = Math.max(maxArea, h * w);
            }
            stack.push(j);
        }
    }
    return maxArea;
};
// @lc code=end
export default maximalRectangle;