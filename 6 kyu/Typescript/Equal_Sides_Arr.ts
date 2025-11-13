export function findEvenIndex(arr: number[]): number {
    let left: number[] = [];
    let right: number[] = [];
    let sumLeft: number = 0;
    let sumRight: number = 0;
    
    for (let i:number = 0; i < arr.length; i++) { 
        left = arr.slice(0, i);
        right = arr.slice(i + 1);
        sumLeft = left.reduce((acc, curr) => acc + curr, 0);
        sumRight = right.reduce((acc, curr) => acc + curr, 0);
        
        if (sumLeft === sumRight) return i;
    }
    return -1;
}