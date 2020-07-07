import fn from "./minimum-window-substring"
const testcase = [
    [
        "ADOBECODEBANC",
        "ABC",
        "BANC"
    ],
    [
        "a",
        "aa",
        ""
    ],
    [
        "a",
        "a",
        "a"
    ],
    [
        "bba",
        "ab",
        "ba",
    ]
];
for (let [w1, w2, answer] of testcase) {
    test(`${w1} ${w2} => ${answer}`, () => {
        expect(fn(w1, w2)).toBe(answer);
    });
}