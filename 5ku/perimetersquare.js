// https://www.codewars.com/kata/559a28007caad2ac4e000083

function perimeter(n) {
    // sum of first n fibonacci numbers = (n+2)th fibonacci number - 1
    let res = [0n, 1n];
    for (let i = 0; i < n + 2; i++) {
        res = [res[1], res[0] + res[1]];
    }
    return Number(4n * (res[1] - 1n));
}