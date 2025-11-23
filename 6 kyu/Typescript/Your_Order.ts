export function order(words:string):string{
    const lib: {word: string, num: number}[] = words.split(' ').map(word => {
        const match = word.match(/\d/);
        return {
            word: word,
            num: Number(match?.[0] ?? 0)
        };
    });
    return lib.sort((a, b) => a.num - b.num).map(obj => obj.word).join(' ')
}
console.log(order("is2 Thi1s T4est 3a"));
