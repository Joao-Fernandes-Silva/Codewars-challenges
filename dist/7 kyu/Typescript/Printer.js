"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printerError = printerError;
function printerError(s) {
    const arr = s.split('');
    let counter = 0;
    const pattern = /^[a-m]$/;
    for (const i of arr) {
        if (!pattern.test(i))
            counter++;
    }
    return `${counter}/${s.length}`;
}
//# sourceMappingURL=Printer.js.map