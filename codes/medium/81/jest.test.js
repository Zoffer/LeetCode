import fn from "./search-in-rotated-sorted-array-ii";
const testcase = [
    [
        [2, 5, 6, 0, 0, 1, 2], 0
    ],
    [
        [2, 5, 6, 0, 0, 1, 2], 3
    ],
    [
        [1], 1
    ],
    [
        [1, 1, 3, 1], 3
    ],
    [
        [1, 3, 1, 1, 1], 3
    ],
    [
        [3, 1, 2, 2, 2], 1
    ],
    [
        [4, 5, 6, 7, 0, 1, 2], 0
    ]
];
for (let [nums, target] of testcase) {
    test(`[${nums}] ${target}`, () => {
        expect(fn(nums, target)).toBe(nums.includes(target));
    });
}