export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
    let years: number = 0;
    let currPop: number = p0;

     while (currPop < p) {
        currPop += Math.floor(currPop * percent / 100) + aug;
        years++;
    }
    return years;
} 