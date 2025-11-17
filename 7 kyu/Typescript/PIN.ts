export class Kata {
    static validatePin(pin: string): boolean {
        if ((pin.length === 4 || pin.length === 6)) {
            if (pin.match(/[^0-9]/g)) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
}

export class Kata2 {
  static validatePin(pin: string): boolean {
    return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin);
  }
}
console.log(Kata.validatePin('1234'));
console.log(Kata2.validatePin('1234'));
console.log(Kata.validatePin('A1234'));
console.log(Kata2.validatePin('A1234'));
