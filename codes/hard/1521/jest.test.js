import fn from "./find-a-value-of-a-mysterious-function-closest-to-target";
const testcase = [
    [
        [9, 12, 3, 7, 15], 5,
        2
    ],
    [
        [1000000, 1000000, 1000000], 1,
        999999
    ],
    [
        [1, 2, 4, 8, 16], 0,
        0
    ]
];

for (const [arr, target, answer] of testcase) {
    test(`${arr}`, () => {
        expect(fn(arr, target)).toBe(answer);
    });
}