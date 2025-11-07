"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOutlier = findOutlier;
exports.findOutlier2 = findOutlier2;
function findOutlier(integers) {
    let evens = [];
    let odds = [];
    if (integers.length === 0)
        return 0;
    for (const n of integers) {
        if (n % 2 === 0) {
            evens.push(n);
        }
        else {
            odds.push(n);
        }
    }
    if (evens.length === 0 || odds.length === 0) {
        return 0;
    }
    else if (evens.length > odds.length) {
        return odds[0];
    }
    else {
        return evens[0];
    }
}
// Different approach but simpler
function findOutlier2(integers) {
    const evenCount = integers.filter(n => n % 2 === 0).length;
    const isEvenOutlier = evenCount === 1;
    return integers.find(n => isEvenOutlier ? n % 2 === 0 : n % 2 !== 0);
}
//# sourceMappingURL=Pair_Outlier.js.map