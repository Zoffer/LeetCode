/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    if (n === 0) return [0];
    const codes = grayCode(--n);
    return [...codes, ...codes.map(x => (1 << n) | x).reverse()];
};
// @lc code=end