import fn from "./largest-rectangle-in-histogram";
const testcase = [
    [[2,1,5,6,2,3], 10],
    [[2,1,2], 3],
    [[1], 1],
    [[2, 4], 4],
];
test.each(testcase)(`(${Array(fn.length).fill("%p").join(", ")}) => %p`, (...args) => {
    expect(fn(...args.slice(0, -1))).toEqual(args.pop());
});