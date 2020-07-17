// PriorityQueue + Dijkstra
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
    const graph = new Graph();
    for (let i = 0; i < edges.length; i++) {
        graph.addEdge(...edges[i], succProb[i]);
    }
    if (!graph.getEdge(start) || !graph.getEdge(end)) return 0;
    const probabilitys = Array(n).fill(0);
    probabilitys[start] = 1;
    const queue = new PriorityQueue();
    queue.push(start, 1);
    const visted = new Set();
    while (queue.size()) {
        let [node, maxPro] = queue.pop();
        while (visted.has(node)) {
            if (!queue.size()) return 0;
            [node, maxPro] = queue.pop();
        }
        if (node === end) return maxPro;
        if (maxPro === 0) return 0;
        visted.add(node);
        for (let [next, pro] of graph.getEdge(node)) {
            if (visted.has(next)) continue;
            let p = maxPro * pro;
            if (p > probabilitys[next]) {
                probabilitys[next] = p;
                queue.push(next, p);
            }
        }
    }
    return 0;
};
class Graph {
    constructor() {
        this.graph = new Map();
    }
    addEdge(a, b, val) {
        const graph = this.graph;
        if (!graph.has(a)) graph.set(a, new Map());
        graph.get(a).set(b, val);
        if (!graph.has(b)) graph.set(b, new Map());
        graph.get(b).set(a, val);
    }
    /**
     * @return {Map}
     */
    getEdge(node) {
        return this.graph.get(node);
    }
}
class PriorityQueue {
    constructor() {
        this.queue = [[-1, Infinity]];
    }
    size() {
        return this.queue.length - 1;
    }
    push(node, pro) {
        this.queue.push([node, pro]);
        this.up();
    }
    pop() {
        if (!this.size()) return null;
        if (this.size() === 1) return this.queue.pop();
        let tmp = this.queue[1];
        this.queue[1] = this.queue.pop();
        this.down();
        return tmp;
    }
    up() {
        const queue = this.queue;
        let i = queue.length - 1;
        while (queue[i][1] > queue[i >> 1][1]) {
            let j = i >> 1;
            [queue[i], queue[j]] = [queue[j], queue[i]];
            i = j;
        }
    }
    down() {
        const queue = this.queue;
        let i = 1;
        while ((i << 1) < queue.length) {
            let j = i << 1;
            if (j < this.size() && queue[j][1] < queue[j + 1][1]) j++;
            if (queue[i][1] > queue[j][1]) break;
            [queue[i], queue[j]] = [queue[j], queue[i]];
            i = j;
        }
    }
}
export default maxProbability;