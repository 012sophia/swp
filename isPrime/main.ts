export function isPrime(num: number): [boolean, string] {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0) {
            return [false, `${num} ist keine Primzahl, weil sie durch ${i} teilbar ist`];
        }
    }
    return [true, `${num} ist eine Primzahl`];
}

for (let i = 1; i <= 20; i++) {
    console.log(isPrime(i));
}
