// Bellman-Ford
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
    const probabilityTo = Array(n).fill(0);
    probabilityTo[start] = 1;
    const len = edges.length;
    let isRelax = true;
    while (isRelax) {
        isRelax = false;
        for (let i = 0; i < len; i++) {
            let [a, b] = edges[i];
            let p = succProb[i];
            if (probabilityTo[a] * p > probabilityTo[b]) {
                probabilityTo[b] = probabilityTo[a] * p;
                isRelax = true;
            }
            if (probabilityTo[b] * p > probabilityTo[a]) {
                probabilityTo[a] = probabilityTo[b] * p;
                isRelax = true;
            }
        }
    }
    return probabilityTo[end];
};
export default maxProbability;