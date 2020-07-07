import fn from "./n-queens";
const testcase = [
    [
        4,
        [
            [
                ".Q..",  // 解法 1
                "...Q",
                "Q...",
                "..Q."
            ],
            [
                "..Q.",  // 解法 2
                "Q...",
                "...Q",
                ".Q.."
            ]
        ]
    ]
];

for (const [n, answer] of testcase) {
    test(`${n} queens`, () => {
        expect(fn(n)).toEqual(answer);
    })
}