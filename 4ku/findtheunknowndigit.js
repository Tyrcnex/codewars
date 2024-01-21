// https://www.codewars.com/kata/546d15cebed2e10334000ed9

const operation = (a, b, operator) => {
    if (operator === "+") return a + b;
    else if (operator === "*") return a * b;
    else if (operator === "-") return a - b;
    else throw new Error('Invalid operator!');
}
const parseNumber = (str, i) => {
    let parsedStr = str.replaceAll('?', i);
    if (i > 0 || str === parsedStr) return parseInt(parsedStr);
    else {
        if (parseInt(parsedStr) === 0 && parsedStr.length > 1) return;
        let removeWildcard = str.replaceAll('?', '');
        if (parseInt(parsedStr) === parseInt(removeWildcard)) return;
        return parseInt(parsedStr);
    }
}
function solveExpression(exp) {
    let allDigits = [...new Set(exp.split('').filter(e => !isNaN(e)).map(e => parseInt(e)).sort((a,b) => a - b))];
    if (!allDigits.length) return -1;
    let equation = [""];
    let op;
    for (let i = 0; i < exp.length; i++) {
        if (i === 0) {
            equation[equation.length - 1] += exp[i];
            continue;
        }
        if (exp[i] === "+" || exp[i] === "*") {
            op = exp[i];
            equation.push("");
        } else if (exp[i] === "=") {
            equation.push("");
        } else if (exp[i] === "-" && !op) {
            op = "-";
            equation.push("");
        } else equation[equation.length - 1] += exp[i];
    }
    let output = -1;
    for (let i = 0; i <= 9; i++) {
        if (allDigits.includes(i)) continue;

        let x1 = parseNumber(equation[0], i);
        if (typeof x1 === "undefined") continue;

        let x2 = parseNumber(equation[1], i);
        if (typeof x2 === "undefined") continue;

        let RHS = parseNumber(equation[2], i);
        if (typeof RHS === "undefined") continue;

        let LHS = operation(x1, x2, op);

        if (LHS === RHS) {
            output = i;
            break;
        }
    }
    return output;
}