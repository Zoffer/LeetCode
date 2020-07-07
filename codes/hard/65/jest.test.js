import fn from "./valid-number"
const testcase = [
    "0",
    " 0.1 ",
    "abc",
    "1 a",
    "2e10",
    " -90e3   ",
    " 1e",
    "e3",
    " 6e-1",
    " 99e2.5 ",
    "53.5e93",
    " --6 ",
    "-+3",
    "95a54e53",
    ".1",
    "3.",
    ".",
    ". 1",
    "4e+",
    " -.",
    "+.8",
    "46.e3",
];
for (let str of testcase) {
    let answer = isNumber(str);
    test(`${str} => ${answer}`, () => {
        expect(fn(str)).toBe(answer);
    });
}

/**
 * @param {string} s
 * @return {boolean}
 */
 function isNumber(s) {
    return /^[+-]?((\d+\.?)|(\d*\.\d+))(e[+-]?\d+)?$/.test(s.trim());
};