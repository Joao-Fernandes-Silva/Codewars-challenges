"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueInOrder = uniqueInOrder;
function uniqueInOrder(iterable) {
    const unic = new Set(iterable);
    let out = [];
    if (iterable.length === 0)
        return [];
    for (let i = 0; i < iterable.length; i++) {
        if (i === 0) {
            out.push(iterable[i]);
        }
        else if (iterable[i - 1] !== iterable[i]) {
            out.push(iterable[i]);
        }
        else {
            continue;
        }
    }
    return out;
}
;
//# sourceMappingURL=Unique_Order.js.map