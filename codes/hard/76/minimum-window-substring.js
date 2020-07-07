/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let map = new Map();
    let ahead = 0, behind = 0;
    let result = s;
    for (let char of t) {
        map.has(char) ? map.set(char, map.get(char) - 1) : map.set(char, -1);
    }
    while (ahead < s.length) {
        let char = s[ahead];
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
            if ([...map.values()].every(n => n >= 0)) break;
        }
        ahead++;
    }
    if (ahead === s.length) return "";
    result = s.slice(behind, ahead + 1);
    while (ahead <= s.length) {
        while (behind <= ahead) {
            let char_b = s[behind];
            if (map.has(char_b)) {
                let count = map.get(char_b);
                if (count <= 0) {
                    if (result.length > ahead - behind + 1) result = s.slice(behind, ahead + 1);
                    break;
                } else {
                    map.set(char_b, count - 1);
                }
            }
            behind++;
        }
        let char = s[++ahead];
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        }
    }
    return result;
};
// @lc code=end
export default minWindow;