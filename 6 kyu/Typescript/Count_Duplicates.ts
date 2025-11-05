export function duplicateCount(text: string): number{
    const list: string[] = text.toLowerCase().split('');
    const set = new Set(text.toLowerCase());
    let count: number = 0

    for (const i of set) {
        let occurences: number = 0;
        
        for (const j of list) {
            if (i === j) occurences++;
        }
        if (occurences !== 1) count++;
    }
    return count;
}