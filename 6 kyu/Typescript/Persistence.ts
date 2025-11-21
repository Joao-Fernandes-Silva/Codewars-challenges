export function persistence(num: number): number {
    let list: number[] = num.toString().split('').map(i => parseInt(i));
    let multiplications: number = 0;

    while (list.length !== 1) {
        list = list.reduce((acc, curr) => acc * curr).toString().split('').map(i => parseInt(i));
        multiplications++;
    }
    return multiplications;
}