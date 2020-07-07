/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];

    const beginGraph = new Map([[beginWord, []]]);
    const endGraph = new Map([[endWord, []]]);
    const intersect = bfs(wordSet, beginGraph, endGraph);
    if (intersect.length === 0) return [];
    const routeList = [];
    for (const word of intersect) {
        let beginRoute = dfs(beginGraph, word, true);
        let endRoute = dfs(endGraph, word, false);
        for (let lb of beginRoute) {
            for (let le of endRoute) {
                routeList.push([...lb, word, ...le]);
            }
        }
    }
    return routeList
};

function bfs(wordSet, beginGraph, endGraph) {
    let beginSet = new Set(beginGraph.keys());
    let endSet = new Set(endGraph.keys());
    while (true) {
        if (beginSet.size <= endSet.size) {
            beginSet = bfsHelper(wordSet, beginSet, beginGraph);
            if (beginSet.size === 0) return [];
        } else {
            endSet = bfsHelper(wordSet, endSet, endGraph);
            if (endSet.size === 0) return [];
        }
        const intersect = [...beginSet].filter(w => endSet.has(w));
        if (intersect.length) return intersect;
    }
}

function bfsHelper(wordSet, words, graph) {
    const tmp_graph = new Map();
    for (let perv_word of words) {
        for (let i = 0; i < perv_word.length; i++) {
            for (let cc = 97; cc <= 122; cc++) {
                let new_word = perv_word.slice(0, i) + String.fromCharCode(cc) + perv_word.slice(i + 1);
                if (wordSet.has(new_word) && !graph.has(new_word)) {
                    if (tmp_graph.has(new_word)) {
                        tmp_graph.get(new_word).add(perv_word);
                    } else {
                        tmp_graph.set(new_word, new Set([perv_word]));
                    }
                }
            }
        }
    }
    tmp_graph.forEach((k, v) => graph.set(v, k));
    return new Set(tmp_graph.keys());
}

function dfs(graph, word, isReverse) {
    const routeList = [];
    for (const pre_w of graph.get(word)) {
        let routes = dfs(graph, pre_w, isReverse).map(isReverse ? r => [...r, pre_w] : r => [pre_w, ...r])
        routeList.push(...routes);
    }
    return routeList.length ? routeList : [[]];
}
// @lc code=end
export default findLadders;