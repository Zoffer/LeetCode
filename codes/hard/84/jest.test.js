import fn from "./largest-rectangle-in-histogram";
const testcase = [
    [[2, 1, 5, 6, 2, 3], 10],
    [[2, 1, 2], 3],
    [[1], 1],
    [[2, 4], 4],
];
for (let [heights, answer] of testcase) {
    test(`${heights.join(",")} => ${answer}`, () => {
        expect(fn(heights)).toBe(answer);
    });
}