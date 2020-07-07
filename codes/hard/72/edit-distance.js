/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let dp = Array.from({ length: word1.length + 1 }, (o, i) => [i]);
    dp[0] = [...Array(word2.length + 1).keys()];
    for (let i = 0; i < word1.length; i++) {
        for (let j = 0; j < word2.length; j++) {
            if (word1[i] === word2[j]) {
                dp[i + 1][j + 1] = dp[i][j];
            } else {
                let del = dp[i][j + 1];
                let ins = dp[i + 1][j];
                let rep = dp[i][j];
                dp[i + 1][j + 1] = Math.min(del, ins, rep) + 1;
            }
        }
    }
    return dp[word1.length][word2.length];
};
// @lc code=end
export default minDistance;