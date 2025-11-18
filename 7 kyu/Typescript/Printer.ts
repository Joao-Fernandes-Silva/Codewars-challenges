export function printerError(s: string): string {
    const arr: string[] = s.split('');
    let counter: number = 0;
    const pattern: RegExp = /^[a-m]$/;

    for (const i of arr) {
        if (!pattern.test(i)) counter++;
    }
    return `${counter}/${s.length}`
}