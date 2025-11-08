export const longest = (s1:string, s2:string): string => {
    let set = new Set(s1 + s2);
    return [...set].sort().join('');
}