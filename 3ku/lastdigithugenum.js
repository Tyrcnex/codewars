// https://www.codewars.com/kata/5518a860a73e708c0a000027

const lastDigit = (as) =>
    as.reduceRight((exp, base) => {
        base = base < 40 ? base : (base % 40 + 40);
        exp = exp < 4 ? exp : (exp % 4 + 4);
        return base ** exp;
    }, 1) % 10;