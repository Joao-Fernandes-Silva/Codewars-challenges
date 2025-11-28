"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisors = divisors;
function divisors(n) {
    let counter = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0)
            counter++;
    }
    return counter;
}
console.log(divisors(64));
//# sourceMappingURL=Count_Divisors.js.map