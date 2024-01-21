// https://www.codewars.com/kata/557f6437bf8dcdd135000010

function factorial(n) {
    if (n < 0) return "";
    if (n < 2) return "1"; // 0! = 1 and 1! = 1;
    if (n < 19) return [...Array(n).keys()].map(e => e + 1).reduce((a,b)=>a*b).toString(); // n < 19 keeps factorial below safe integer range
    let fact = "6402373705728000".split(""); // 18!
    for (let i = 19; i <= n; i++) {
        let carry = 0;
        for (let c = fact.length - 1; c >= 0; c--) {
            let mul = +fact[c] * i + carry;
            fact[c] = (mul % 10) + "";
            carry = ~~(mul / 10);
        }
        if (carry > 0) fact = (carry + "").split("").concat(fact);
    }
    return fact.join('');
}