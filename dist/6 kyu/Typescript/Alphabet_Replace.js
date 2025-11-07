"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphabetPosition = alphabetPosition;
function alphabetPosition(text) {
    let out = '';
    for (let i = 0; i < text.length; i++) {
        let pos = text.toLowerCase().charCodeAt(i) - 96;
        if (pos < 1 || pos > 26)
            continue;
        out += pos.toString() + ' ';
    }
    return out.trimEnd();
}
console.log(alphabetPosition(''));
//# sourceMappingURL=Alphabet_Replace.js.map