/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let list = path.split("/");
    let stack = [];
    for (let p of list) {
        if (!p || p === ".") continue;
        if (p === "..") {
            stack.pop();
        } else {
            stack.push(p);
        }
    }
    return "/" + stack.join("/");
};
// @lc code=end

