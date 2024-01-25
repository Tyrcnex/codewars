// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
    str = str.trim();
    if (!str.length) return false;

    let arr = str.split(/\s+/);
    if (arr.some(e => e.length >= 140)) return false;
    return "#" + arr.map(e => e[0].toUpperCase() + e.slice(1)).join("");
}