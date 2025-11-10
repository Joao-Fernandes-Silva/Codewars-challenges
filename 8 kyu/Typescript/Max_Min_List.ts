export const min = (list: number[]): number => {
    let min: number = list[0] ?? 0;
    
    for (const n of list) {
        if (n < min) min = n;
    }
    return min;
};

export const max = (list: number[]): number => {
    let max: number = list[0] ?? 0;
    
    for (const n of list) {
        if (n > max) max = n;
    }
    return max;
};
