import fn from "./jump-game-ii";
const testcase = [
    [[0], 0],
    [[2, 3, 1, 1, 4], 2],
    [[1, 2, 3], 2],
];
test.each(testcase)(`%p => %p`, (...args) => {
    expect(fn(...args.slice(0, -1))).toEqual(args.pop());
});