// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString(str) {
    let endNum = str.match(/[0-9]+$/);
    if (!endNum) return str + '1';
    let strNum = endNum[0];
    console.log(strNum);
    let num = parseInt(strNum) + 1;
    return str.slice(0, -strNum.length) + ("00000000000000" + num).substr(-Math.max(num.toString().length,strNum.length));
}