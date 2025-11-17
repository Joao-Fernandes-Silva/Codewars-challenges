"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEvenIndex = findEvenIndex;
function findEvenIndex(arr) {
    let left = [];
    let right = [];
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < arr.length; i++) {
        left = arr.slice(0, i);
        right = arr.slice(i + 1);
        sumLeft = left.reduce((acc, curr) => acc + curr, 0);
        sumRight = right.reduce((acc, curr) => acc + curr, 0);
        if (sumLeft === sumRight)
            return i;
    }
    return -1;
}
//# sourceMappingURL=Equal_Sides_Arr.js.map