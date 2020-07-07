import fn from "./edit-distance"
const testcase = [
    ["horse", "ros", 3],
    ["intention", "execution", 5],
];
for (let [w1, w2, answer] of testcase) {
    test(`${w1} ${w2} => ${answer}`, () => {
        expect(fn(w1, w2)).toBe(answer);
    });
}