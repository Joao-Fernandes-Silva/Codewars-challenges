"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitalRoot = void 0;
const digitalRoot = (n) => {
    let sum = n;
    while (sum >= 10) {
        let temp = sum.toString().split('').map(Number);
        sum = 0;
        for (const num of temp)
            sum += num;
    }
    return sum;
};
exports.digitalRoot = digitalRoot;
console.log((0, exports.digitalRoot)(435350644264));
//# sourceMappingURL=Digital_Root.js.map