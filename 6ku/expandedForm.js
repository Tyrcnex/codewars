// https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
    let digitArr = num.toString().split('').map(e => parseInt(e));
    let newStr = digitArr.map((e,i) => e * 10 ** (digitArr.length - i - 1)).filter(e => e > 0);
    return newStr.join(' + ');
}