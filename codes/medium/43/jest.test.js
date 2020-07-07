import fn from "./multiply-strings";
const testcase = [
    ["0", "456", "0"],
    ["123", "456", "56088"],
];
test.each(testcase)(`%s x %s => %s`, (...args) => {
    expect(fn(...args.slice(0, -1))).toEqual(args.pop());
});