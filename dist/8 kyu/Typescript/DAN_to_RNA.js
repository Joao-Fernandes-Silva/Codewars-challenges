"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNAtoRNA = DNAtoRNA;
function DNAtoRNA(dna) {
    let out = '';
    const list = [{
            A: 'U',
            T: 'A',
            C: 'G',
            G: 'C',
        }];
    for (const nucl of dna) {
        out += list[];
    }
    console.log(DNAtoRNA('ATCG'));
}
//# sourceMappingURL=DAN_to_RNA.js.map