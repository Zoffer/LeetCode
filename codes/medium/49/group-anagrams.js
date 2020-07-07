/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    for (const s of strs) {
        let product = 1;
        for (let i = 0; i < s.length; i++) {
            product *= primes[s.charCodeAt(i) - 97];
        }
        if (map.has(product)) {
            map.get(product).push(s);
        } else {
            map.set(product, [s]);
        }
    }
    return [...map.values()];
};
// @lc code=end

