export function divisors(n: number) {
    let counter: number = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) counter++
    }
    return counter
}
console.log(divisors(64));
