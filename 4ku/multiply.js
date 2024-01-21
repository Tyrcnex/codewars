// https://www.codewars.com/kata/55911ef14065454c75000062

function multiply(a,b) {
    a = a.replace(/^0+/g, "").split("").reverse().join("");
    b = b.replace(/^0+/g, "").split("").reverse().join("");
    let nums = [];
    for (let a1 = 0; a1 < a.length; a1++) {
        for (let b1 = 0; b1 < b.length; b1++) {
            let coeff = +a[a1] * +b[b1];
            if (coeff === 0) continue;
            nums.push(coeff+"0".repeat(a1+b1));
        }
    }
    if (!nums.length) return "0";
    let num = "";
    let carry = 0;
    for (let i = 0; i < a.length + b.length; i++) {
        let currentDig = carry;
        for (let aNum of nums) {
            if (i > aNum.length - 1) continue;
            else currentDig += +aNum[aNum.length - i - 1];
        }
        num = (currentDig % 10) + num;
        carry = ~~(currentDig / 10);
    }
    return num.replace(/^0+/g, "");
}