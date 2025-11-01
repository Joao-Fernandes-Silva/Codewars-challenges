export function alphabetPosition(text: string): string {
    let out = ''

    for (let i = 0; i < text.length; i++) {
        let pos: number = text.toLowerCase().charCodeAt(i) - 96;
        if (pos < 1 || pos > 26) continue;
        out += pos.toString() + ' ';
    }
    return out.trimEnd();
}

console.log(alphabetPosition(''));
