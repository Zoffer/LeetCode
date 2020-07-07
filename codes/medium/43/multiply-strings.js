/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    const N = new Array(num1.length + num2.length).fill(0);    //初始化数组
    for (let i = 0, last1 = num1.length - 1; i <= last1; i++) {
        const n1 = Number(num1[last1 - i]);
        for (let j = 0, last2 = num2.length - 1; j <= last2; j++) {
            const n2 = Number(num2[last2 - j]);
            const x = N[i + j] + n1 * n2;           //累加对应位置数值
            N[i + j] = x % 10;                      //只保留一位数
            N[i + j + 1] += Math.floor(x / 10);     //进位
        }
    }
    return N.reverse().join("").replace(/^0*/, "") || "0";     //翻转拼接数组，清理多余的 0
};
// @lc code=end
export default multiply;
