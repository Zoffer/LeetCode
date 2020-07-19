/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length < 2) return 0;
    let buy_1 = Math.max(-prices[0], -prices[1]);
    let sell_1 = Math.max(0, prices[1] - prices[0]);
    let buy_2 = -prices[2];
    let sell_2 = 0;
    for (let i = 2; i < prices.length; i++) {
        buy_1 = Math.max(-prices[i], buy_1);
        buy_2 = Math.max(sell_1 - prices[i], buy_2);
        sell_1 = Math.max(buy_1 + prices[i], sell_1);
        sell_2 = Math.max(buy_2 + prices[i], sell_2);
    }
    return Math.max(sell_1, sell_2);
};
// @lc code=end

