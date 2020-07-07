import fn from "./interleaving-string"
const testcase = [
    [
        "aabcc",
        "dbbca",
        "aadbbcbcac",
        true
    ],
    [
        "aaa",
        "aaab",
        "aaabaaa",
        true
    ],
    [
        "aabcc",
        "dbbca",
        "aadbbbaccc",
        false
    ],
    [
        "",
        "b",
        "b",
        true
    ]
];
for (let [s1, s2, s3, answer] of testcase) {
    test(`${s1} + ${s2} = ${s3} ?`, () => {
        expect(fn(s1, s2, s3)).toBe(answer);
    });
}