export function narcissistic(value: number): boolean {
    const val: string = value.toString();
    const length: number = val.length; 
    return val.split('').map(n => parseInt(n)).reduce((acc, curr) => acc += curr ** length, 0) === value;
}

export function narcissistic2(value: number): number {
    const val: string = value.toString();
    const length: number = val.length;
    return val.split('').map(n => parseInt(n, 10)).reduce((acc, curr) => acc + curr ** length, 0);
}
console.log(narcissistic2(153));
