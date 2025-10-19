export function countBits(n: number): number {
    const binary: string = n.toString(2);
    let count: number = 0;
    for (const x of binary) {
        if (x === '1') count++;
    }
    return count;
}

console.log(countBits(1234))