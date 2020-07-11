/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const result = [];
    const dfs = (index, ...ips) => {
        if (ips.length === 4 && index === s.length) return void result.push(ips.join("."));
        if (ips.length === 4) return;
        for (let i = 1; i < 4 && index + i <= s.length; i++) {
            let str = s.slice(index, index + i);
            if (/^0.+/.test(str)) return;
            if (Number(str) <= 255) dfs(index + i, ...ips, str);
        }
    }
    dfs(0);
    return result;
};
// @lc code=end

