"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = exports.min = void 0;
const min = (list) => {
    let min = list[0] ?? 0;
    for (const n of list) {
        if (n < min)
            min = n;
    }
    return min;
};
exports.min = min;
const max = (list) => {
    let max = list[0] ?? 0;
    for (const n of list) {
        if (n > max)
            max = n;
    }
    return max;
};
exports.max = max;
//# sourceMappingURL=Max_Min_List.js.map