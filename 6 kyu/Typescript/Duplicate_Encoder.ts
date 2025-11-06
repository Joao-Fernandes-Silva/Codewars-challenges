export function duplicateEncode(word: string) {  
    const lower: string = word.toLowerCase();
    const duplicates: string[] = [];
    let out: string = '';
    
    if (word.length === 0) return '';
    
    for (let i: number = 0; i < lower.length - 1; i++) {
        if (lower.indexOf(lower[i]!) !== lower.lastIndexOf(lower[i]!)) duplicates.push(lower[i]!);
    }

    for (const i of lower) {
        if (duplicates.includes(i)) {
            out += ')';
        } else {
            out += '(';
        }
    }
    return out;
}