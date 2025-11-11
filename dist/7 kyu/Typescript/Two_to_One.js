"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longest = void 0;
const longest = (s1, s2) => {
    let set = new Set(s1 + s2);
    return [...set].sort().join('');
};
exports.longest = longest;
//# sourceMappingURL=Two_to_One.js.map