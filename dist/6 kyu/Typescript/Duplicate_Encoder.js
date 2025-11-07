"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateEncode = duplicateEncode;
function duplicateEncode(word) {
    const lower = word.toLowerCase();
    const duplicates = [];
    let out = '';
    if (word.length === 0)
        return '';
    for (let i = 0; i < lower.length - 1; i++) {
        if (lower.indexOf(lower[i]) !== lower.lastIndexOf(lower[i]))
            duplicates.push(lower[i]);
    }
    for (const i of lower) {
        if (duplicates.includes(i)) {
            out += ')';
        }
        else {
            out += '(';
        }
    }
    return out;
}
//# sourceMappingURL=Duplicate_Encoder.js.map