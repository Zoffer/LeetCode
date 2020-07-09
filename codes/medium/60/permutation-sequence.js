/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let factorial = 1;
    const unusedNum = Array.from({ length: n }, (_, i) => {
        factorial *= ++i;
        return i;
    });
    let str = "";
    for (k--; n > 0; n--) {
        factorial /= n;
        str += unusedNum.splice(Math.floor(k / factorial), 1)[0];
        k %= factorial;
    }
    return str;
};
// @lc code=end