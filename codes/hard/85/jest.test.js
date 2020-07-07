import fn from "./maximal-rectangle";
const testcase = [
    [
        [],
        0
    ],
    [
        [
            ["1", "0", "1", "0", "0"],
            ["1", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1"],
            ["1", "0", "0", "1", "0"]
        ],
        6
    ]
];
for (let [matrix, answer] of testcase) {
    test("\n" + matrix.map(r => `[${r.join(", ")}]`).join("\n"), () => {
        expect(fn(matrix)).toBe(answer);
    })
}