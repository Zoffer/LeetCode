/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0) return 0;
    let x0 = x;
    while (true) {
        let x1 = 0.5 * x0 + 0.5 * x / x0;
        if (x0 - x1 < 1e-7) break;
        x0 = x1;
    }
    return x0 | 0;
};
// @lc code=end

