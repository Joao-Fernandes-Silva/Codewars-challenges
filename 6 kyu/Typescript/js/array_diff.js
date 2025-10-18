"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayDiff = arrayDiff;
function arrayDiff(a, b) {
    let arr = [];
    for (const na of a) {
        let flag = false;
        for (const nb of b) {
            if (na === nb) {
                flag = true;
                break;
            }
        }
        if (flag === false) {
            arr.push(na);
        }
    }
    return arr;
}
console.log(arrayDiff([1, 2, 2, 3], []));
console.log(arrayDiff([1, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2, 2, 3], [2, 3]));
//# sourceMappingURL=array_diff.js.map