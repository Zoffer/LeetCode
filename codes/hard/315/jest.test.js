import fn from "./count-of-smaller-numbers-after-self";
const testcase = [
    [
        [], []
    ],
    [
        [5], [0]
    ],
    [
        [5, 2, 6, 1],
        [2, 1, 1, 0]
    ]
];

for (const [list, answer] of testcase) {
    test(`${list}`, () => {
        expect(fn(list)).toEqual(answer);
    })
}