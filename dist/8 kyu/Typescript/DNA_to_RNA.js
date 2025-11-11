"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNAtoRNA = DNAtoRNA;
function DNAtoRNA(dna) {
    let mRNA = '';
    const translation = {
        A: 'U',
        T: 'A',
        C: 'G',
        G: 'C',
    };
    for (const nucl of dna) {
        if (nucl in translation)
            mRNA += translation[nucl];
    }
    return mRNA;
}
console.log(DNAtoRNA('ATCG'));
//# sourceMappingURL=DNA_to_RNA.js.map