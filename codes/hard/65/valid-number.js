/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    let state = 0;
    const transfer = [
        //+- | 0-9 | . | e  
        [5, 1, 6, -1],  //0 初始状态
        [-1, 1, 4, 7],  //1 整数部分
        [-1, 2, -1, 7], //2 小数部分
        [-1, 3, -1, -1], //3 e的数字部分
        [-1, 2, -1, 7], //4 匹配到非空小数点
        [-1, 1, 6, -1], //5 匹配到加号，等待数字
        [-1, 2, -1, -1], //6 匹配到空小数点，等待数字
        [8, 3, -1, -1], //7 匹配到e，等待数字
        [-1, 3, -1, -1], //8 匹配到e后面的[+-]，等待数字
    ];
    for (let c of s.trim()) {
        switch (c) {
            case "+":
            case "-":
                state = transfer[state][0];
                break;
            case ".":
                state = transfer[state][2];
                break;
            case "e":
                state = transfer[state][3];
                break;
            default:
                state = "0123456789".includes(c) ? transfer[state][1] : -1;
        }
        if (state < 0) return false;
    }
    return [1, 2, 3, 4].includes(state);
};
// @lc code=end
export default isNumber;