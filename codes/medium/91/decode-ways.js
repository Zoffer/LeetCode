/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (!s || s.startsWith("0")) return 0;
    let now = 1, last = 1, lastLast = 1;
    for (let i = 1; i < s.length; i++) {
        if (Number(s[i]) === 0) last = 0;
        if (Number(s.slice(i - 1, i + 1)) > 26) lastLast = 0;
        now = last + lastLast;
        lastLast = last;
        last = now;
    }
    return now;
};
// @lc code=end

