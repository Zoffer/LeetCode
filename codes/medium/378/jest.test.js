import fn from "./kth-smallest-element-in-a-sorted-matrix";
const testcase = [
    [
        [
            [1, 2],
            [1, 3]
        ], 1, 1
    ],
    [
        [
            [1, 2],
            [1, 3]
        ], 2, 1
    ],
    [
        [
            [1, 2],
            [1, 3]
        ], 3, 2
    ],
    [
        [
            [1, 3, 5],
            [6, 7, 12],
            [11, 14, 14]
        ], 4, 6
    ],
    [
        [
            [1, 3, 5],
            [6, 7, 12],
            [11, 14, 14]
        ], 6, 11
    ],
    [
        [
            [1, 2, 11],
            [2, 3, 12],
            [11, 12, 13]
        ], 4, 3
    ],
];
test.each(testcase)(`%j, %d => %d`, (...args) => {
    expect(fn(...args.slice(0, -1))).toBe(args.pop());
});