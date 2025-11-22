"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistence = persistence;
function persistence(num) {
    let list = num.toString().split('').map(i => parseInt(i));
    let multiplications = 0;
    while (list.length !== 1) {
        list = list.reduce((acc, curr) => acc * curr).toString().split('').map(i => parseInt(i));
        multiplications++;
    }
    return multiplications;
}
//# sourceMappingURL=Persistence.js.map