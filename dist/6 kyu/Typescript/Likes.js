"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = void 0;
const likes = (a) => {
    if (a.length === 0)
        return 'no one likes this';
    if (a.length === 1)
        return `${a[0]} likes this`;
    if (a.length === 2)
        return `${a[0]} and ${a[1]} like this`;
    if (a.length === 3)
        return `${a[0]}, ${a[1]} and ${a[2]} like this`;
    return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
};
exports.likes = likes;
console.log((0, exports.likes)(['Alex', 'Jacob', 'Mark', 'Max']));
console.log((0, exports.likes)(['Alex', 'Jacob', 'Mark']));
//# sourceMappingURL=likes.js.map