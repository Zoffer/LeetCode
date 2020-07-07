import fn from "./wildcard-matching";
const testcase = [
    ["", "*", true],
    ["", "?", false],
    ["", "", true],
    ["adceb", "*a*b", true],
    ["a", "a*", true],
    ["b", "??", false],
    ["acdcb", "a*c?b", false],
    ["ho", "ho**", true],
    ["aa", "*", true],
    ["aa", "a", false],
    ["b", "*?*?", false],
    ["aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba", "a*******b", false],
    ["aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba", "**a*a*a*b**b", false],
    ["aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba", "**a*a*a*b**a", true],
    [
        "abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb",
        "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb",
        false
    ]
];
test.each(testcase)(`%p, %p => %p`, (...args) => {
    expect(fn(...args.slice(0, -1))).toEqual(args.pop());
}, 2000);