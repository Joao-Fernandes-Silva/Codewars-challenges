export function uniqueInOrder (iterable: string | (string | number)[]):(string | number)[] {
    const unic = new Set(iterable);
    let out: (string | number)[] = [];

    if (iterable.length === 0) return [];

    for (let i = 0; i < iterable.length; i++) {
        if (i === 0) {
            out.push(iterable[i]!);
        } else if (iterable[i - 1] !== iterable[i]){
            out.push(iterable[i]!);
        } else {
            continue;
        }
    }
    return out;
};