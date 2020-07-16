/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    const colors = Array(graph.length).fill(-1);
    for (let [i, c] of colors.entries()) {
        if (c !== -1) continue;
        colors[i] = 0;
        const stack = [i];
        while (stack.length) {
            let node = stack.pop();
            let color = colors[node] ^ 1;
            for (let edge of graph[node]) {
                if (colors[edge] === -1) {
                    colors[edge] = color;
                    stack.push(edge);
                } else if (colors[edge] !== color) {
                    return false;
                }
            }
        }
    }
    return true;
};
// @lc code=end

