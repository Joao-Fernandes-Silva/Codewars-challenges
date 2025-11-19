"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wave = wave;
function wave(str) {
    const arr = [];
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ')
            continue;
        arr.push(str.slice(0, i) + str[i]?.toUpperCase() + str.slice(i + 1));
    }
    return arr;
}
console.log(wave('h e l l o'));
//# sourceMappingURL=Mexican_Wave.js.map