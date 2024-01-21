// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

function solution(text, markers) {
    let textArr = text.split('\n');
    if (!markers.length) return textArr.map(e => e.trimEnd()).join("\n");
    let newText = [];
    for (let line of textArr) {
        let markerIndex = line.split('').findIndex(e => markers.includes(e));
        if (markerIndex > -1) newText.push(line.substring(0, markerIndex).trimEnd());
        else newText.push(line.trimEnd());
    }
    return newText.join("\n");
}