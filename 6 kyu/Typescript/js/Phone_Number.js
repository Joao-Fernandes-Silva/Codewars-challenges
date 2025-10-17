"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoneNumber = createPhoneNumber;
function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}
//test
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//# sourceMappingURL=Phone_Number.js.map