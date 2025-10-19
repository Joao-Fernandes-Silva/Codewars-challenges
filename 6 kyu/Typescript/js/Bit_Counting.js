"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBits = countBits;
function countBits(n) {
    const binary = n.toString(2);
    let count = 0;
    for (const x of binary) {
        if (x === '1')
            count++;
    }
    return count;
}
console.log(countBits(1234));
//# sourceMappingURL=Bit_Counting.js.map