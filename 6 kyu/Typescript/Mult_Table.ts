export function multiplicationTable (size: number): number[][] {
    const table: number[][] = [];
    const n: number = size;

    for (let i = 1; i <= n; i++) {
        let row: number[] = [];
        for (let j = 1; j <= n; j++) {
            row.push(i * j)
        }
        table.push(row);
    }
    return table;
}