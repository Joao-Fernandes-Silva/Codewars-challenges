export const digitalRoot = (n:number):number => {
    let sum: number = n
    
    while (sum >= 10) {
        let temp: number[] = sum.toString().split('').map(Number);
        sum = 0;
        for (const num of temp) sum += num;
    }
    return sum 
};

console.log(digitalRoot(435350644264));
