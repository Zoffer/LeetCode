import fn from "./regular-expression-matching";
const testcase = [
    ["mississippi", "mis*is*p*.", false],
    ["aa", "a", false],
    ["abc", "abc", true],
    ["abc", ".*", true],
    ["", "..*", false],
    ["aab", "b.*", false],
    ["a", "ab*", true],
    ["aaa", "a*a", true],
    ["aa", "a*", true],
    ["abc", ".*c", true],
    ["aaa", "ab*a*c*a", true],
    ["aaaaaabaaa", "a*baa*c*a", true],
    ["a", ".*..a*", false],
    ["ab", ".*..", true],
    ["aaca", "ab*a*c*a", true],
    ["aab", "c*a*b", true],
    ["aba", ".*.*", true],
    ["abbaaaabaabbcba", "a*.*ba.*c*..a*.a*.", true],
];
test.each(testcase)(`(${Array(fn.length).fill("%p").join(", ")}) => %p`, (...args) => {
    expect(fn(...args.slice(0, -1))).toEqual(args.pop());
});