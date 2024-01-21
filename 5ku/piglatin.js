// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
    let splitStr = str.split(' ');
    let newStr = [];
    for (let string of splitStr) {
        let punctuation = ['?','!','.','-'].find(x => x == string[string.length - 1]);
        if (punctuation) {
            if (punctuation === string) newStr.push(string); // just a singular punctuation mark
            else newStr.push(string.slice(1,-1) + string[0] + "ay" + punctuation);
        } else {
            newStr.push(string.slice(1) + string[0] + "ay")
        }
    }
    return newStr.join(' ');
}