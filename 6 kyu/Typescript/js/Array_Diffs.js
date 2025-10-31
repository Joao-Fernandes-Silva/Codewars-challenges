"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayDiff = arrayDiff;
exports.arrayDiff2 = arrayDiff2;
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
function arrayDiff2(a, b) {
    let arr = [];
    arr = a.filter((na) => !b.includes(na));
    return arr;
}
console.log(arrayDiff([1, 2, 2, 3], []));
console.log(arrayDiff([1, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2, 2, 3], [2, 3]));
console.log(arrayDiff2([1, 2, 2, 3], []));
console.log(arrayDiff2([1, 2, 2, 3], [2]));
console.log(arrayDiff2([1, 2, 2, 3], [2, 3]));
//# sourceMappingURL=Array_Diffs.js.map