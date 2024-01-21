// https://www.codewars.com/kata/55b7bb74a0256d4467000070/

function properFractions(n){
    if (n === 1) return 0;
    let totient = n;
    let num = n;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (num % i === 0) {
            totient *= (1 - 1 / i);
            while (num % i === 0) num /= i;
        }
    }
    if (num > 1) { // if n is prime
        totient *= (1 - 1 / num);
    }
    return Math.round(totient); // floating point error
}