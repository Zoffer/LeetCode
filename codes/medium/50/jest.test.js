import fn from "./powx-n";
const testcase = [
    [3, 7],
    [2, -2],
    [1.00000, -2147483648],
];
for (const [x, n] of testcase) {
    const answer = x ** n;
    test(`${x} ** ${n} => ${answer}`, () => {
        expect(fn(x, n)).toBe(answer);
    })
}