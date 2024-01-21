// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

function zeros (n) {
    let totalZeros = 0;
    for (let i = 1; i < 1 + ~~Math.log(n)/Math.log(5); i++) {
        totalZeros += ~~(n / (5 ** i));
    }
    return totalZeros;
}