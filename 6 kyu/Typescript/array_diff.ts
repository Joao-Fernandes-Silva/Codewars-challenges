export function arrayDiff(a: number[], b: number[]): number[] {
    let arr: number[] = [];

    for (const na of a) {
        let flag: boolean = false;

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

export function arrayDiff2(a: number[], b: number[]): number[] {
    let arr: number[] = [];
    arr = a.filter((na) => !b.includes(na));
    return arr;
}

console.log(arrayDiff([1, 2, 2, 3], []));
console.log(arrayDiff([1, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2, 2, 3], [2, 3]));

console.log(arrayDiff2([1, 2, 2, 3], []));
console.log(arrayDiff2([1, 2, 2, 3], [2]));
console.log(arrayDiff2([1, 2, 2, 3], [2, 3]));
