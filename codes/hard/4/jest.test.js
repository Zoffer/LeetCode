import fn from "./median-of-two-sorted-arrays";
const testcase = [
    [[1], [1], 1],
    [[1], [2, 3], 2],
    [[1], [2, 3, 4], 2.5],
    [[1, 2, 3], [1, 2, 2], 2],
    [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], 5.5],
    [[2, 3], [1], 2],
    [[100000], [100001], 100000.5],
    [[], [1, 2, 3, 4, 5], 3],
    [[], [1], 1],
    [[1], [], 1],
    [[], [1, 2], 1.5],
    [[1, 2], [], 1.5],
    [[1, 2, 3, 4, 5, 7, 9, 10,20], [4, 6, 7, 8, 10, 12], 7],
    [[1, 2, 3, 4, 5, 7, 9, 10,17, 20, 27,30], [4, 6, 7, 8, 10, 12, 20], 8],
];
test.each(testcase)(`(${Array(fn.length).fill("%p").join(", ")}) => %p`, (...args) => {
    expect(fn(...args.slice(0, -1))).toEqual(args.pop());
});