"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryArrayToNumber = binaryArrayToNumber;
function binaryArrayToNumber(arr) {
    return parseInt(arr.join(''), 2);
}
;
console.log(binaryArrayToNumber([0, 0, 0, 1]));
//# sourceMappingURL=Zeros_Ones.js.map