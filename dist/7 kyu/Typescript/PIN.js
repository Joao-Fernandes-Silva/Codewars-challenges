"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata2 = exports.Kata = void 0;
class Kata {
    static validatePin(pin) {
        if ((pin.length === 4 || pin.length === 6)) {
            if (pin.match(/[^0-9]/g)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
}
exports.Kata = Kata;
class Kata2 {
    static validatePin(pin) {
        return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin);
    }
}
exports.Kata2 = Kata2;
console.log(Kata.validatePin('1234'));
console.log(Kata2.validatePin('1234'));
console.log(Kata.validatePin('A1234'));
console.log(Kata2.validatePin('A1234'));
//# sourceMappingURL=PIN.js.map