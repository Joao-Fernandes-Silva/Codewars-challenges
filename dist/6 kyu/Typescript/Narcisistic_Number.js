"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.narcissistic = narcissistic;
exports.narcissistic2 = narcissistic2;
function narcissistic(value) {
    const val = value.toString();
    const length = val.length;
    return val.split('').map(n => parseInt(n)).reduce((acc, curr) => acc += curr ** length, 0) === value;
}
function narcissistic2(value) {
    const val = value.toString();
    const length = val.length;
    return val.split('').map(n => parseInt(n, 10)).reduce((acc, curr) => acc + curr ** length, 0);
}
console.log(narcissistic2(153));
//# sourceMappingURL=Narcisistic_Number.js.map