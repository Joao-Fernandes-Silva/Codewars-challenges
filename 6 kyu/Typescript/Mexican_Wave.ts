export function wave(str: string): Array<string>{
    const arr: string[] = [];
    str = str.toLowerCase();
    
    for (let i: number = 0; i < str.length; i++) {
        if (str[i] === ' ') continue;
        arr.push(str.slice(0, i) + str[i]?.toUpperCase() + str.slice(i + 1));
    }
    return arr;
}
console.log(wave('h e l l o'));
