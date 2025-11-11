export function DNAtoRNA(dna: string): string {
    let mRNA: string = '';
    const translation: { [key: string]: string } = {
        A: 'U',
        T: 'A',
        C: 'G',
        G: 'C',
    };
    
    for (const nucl of dna) {
       if (nucl in translation) mRNA += translation[nucl];
    }
    return mRNA;
}
console.log(DNAtoRNA('ATCG'));