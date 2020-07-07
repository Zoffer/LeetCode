/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let s_i = 0, p_i = 0;
    let s_i_copy = -1, p_i_copy = -1;
    while (s_i < s.length) {
        const char = p.charAt(p_i);
        if (char === "?" || char === s[s_i]) {
            s_i++, p_i++;
        } else if (char === "*") {
            p_i_copy = ++p_i;
            s_i_copy = s_i;
        } else if (s_i_copy >= 0) {
            s_i = ++s_i_copy;
            p_i = p_i_copy;
        } else {
            return false;
        }
    }
    while (p_i < p.length && p[p_i] === "*") p_i++;
    return p_i === p.length;
};
// @lc code=end
export default isMatch;