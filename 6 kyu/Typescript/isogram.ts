export function isIsogram(str: string): boolean{
    const s: string = str.toLowerCase()
    const m = new Set(s);
    if (s.length === m.size) return true
    return false
}