import fn from "./word-ladder-ii"
const testcase = [
    [
        "hit",
        "cog",
        ["hot", "dot", "dog", "lot", "log", "cog"],
        [
            ["hit", "hot", "dot", "dog", "cog"],
            ["hit", "hot", "lot", "log", "cog"]
        ]
    ],
    [
        "a",
        "c",
        ["a", "b", "c"],
        [
            ["a", "c"]
        ],
    ],
    [
        "hit",
        "cof",
        ["hot", "dot", "dog", "lot", "log", "cog"],
        []
    ],
    [
        "hot",
        "dot",
        ["hot", "dot", "dog"],
        [
            ["hot", "dot"]],
    ],
    [
        "hot",
        "lol",
        ["hot", "dot", "dog", , "loc", "lol"],
        [],
    ],
    [
        "red",
        "tax",
        ["ted", "tex", "red", "tax", "tad", "den", "rex", "pee"],
        [
            ["red", "ted", "tad", "tax"],
            ["red", "ted", "tex", "tax"],
            ["red", "rex", "tex", "tax"]
        ]
    ],
    [
        "tax",
        "red",
        ["ted", "tex", "red", "tax", "tad", "den", "rex", "pee"],
        [
            ["tax", "tad", "ted", "red"],
            ["tax", "tex", "ted", "red"],
            ["tax", "tex", "rex", "red"],
        ]
    ],
];
test.each(testcase)(`(${Array(fn.length).fill("%p").join(", ")})`, (...args) => {
    expect(fn(...args.slice(0, -1))).toEqual(expect.arrayContaining(args.pop()));
});