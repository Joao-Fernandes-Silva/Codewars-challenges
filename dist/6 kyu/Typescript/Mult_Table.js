"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicationTable = multiplicationTable;
function multiplicationTable(size) {
    const table = [];
    const n = size;
    for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= n; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}
//# sourceMappingURL=Mult_Table.js.map