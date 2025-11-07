"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateCount = duplicateCount;
function duplicateCount(text) {
    const list = text.toLowerCase().split('');
    const set = new Set(text.toLowerCase());
    let count = 0;
    for (const i of set) {
        let occurences = 0;
        for (const j of list) {
            if (i === j)
                occurences++;
        }
        if (occurences !== 1)
            count++;
    }
    return count;
}
//# sourceMappingURL=Count_Duplicates.js.map