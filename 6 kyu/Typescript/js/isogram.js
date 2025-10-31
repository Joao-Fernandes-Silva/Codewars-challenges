"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIsogram = isIsogram;
function isIsogram(str) {
    const s = str.toLowerCase();
    const m = new Set(s);
    if (s.length === m.size)
        return true;
    return false;
}
//# sourceMappingURL=Isogram.js.map