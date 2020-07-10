/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let hold_stock = -prices[0]; //持有股票
    let cooldown = 0;            //冷冻期
    let can_buy = 0;             //可交易
    for (let i = 1; i < prices.length; i++) {
        //进入持有股票状态：          1.不操作，保持持有； 2.可交易状态下以当日价格买入股票
        const next_hold_stock = Math.max(hold_stock, can_buy - prices[i]);
        //进入冷冻期：           1.以当日价格卖出持有股票
        const next_cooldown = hold_stock + prices[i];
        //进入可交易状态：     1.不操作，保持可交易；2.冷冻期结束
        const next_can_buy = Math.max(can_buy, cooldown);
        [hold_stock, cooldown, can_buy] = [next_hold_stock, next_cooldown, next_can_buy];
    }
    return Math.max(can_buy, cooldown); //持有股票状态收益一定是最少，不再参与比较
};
// @lc code=end

