/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (s === p || p === ".*") { return true; }
    let dp = [true];
    for (let i = 0; i < p.length && dp.length; i++) {
        let char = p[i];
        let x = dp.indexOf(true);
        if (p[i + 1] === "*") {
            if (char === ".") {
                while (x <= s.length) {
                    dp[x++] = true;
                }
            } else {
                let nextdp = Array.from(dp);
                while (x < dp.length && x <= s.length) {
                    if (dp[x]) {
                        while (s[x] === char) {
                            nextdp[++x] = true;
                        }
                    }
                    x++;
                }
                dp = nextdp;
            }
            i++;
        } else {
            if (char === ".") {
                dp.unshift(false);
            } else {
                let nextdp = [];
                while (x < dp.length && x < s.length) {
                    if (dp[x] && s[x] === char) {
                        nextdp[x + 1] = true;
                    }
                    x++;
                }
                dp = nextdp;
            }
        }
    }
    return Boolean(dp[s.length]);
};
// @lc code=end
export default isMatch;