// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/

function sumIntervals(intervals) {
    let sint = intervals.sort((a,b) => {
        if (a[0] !== b[0]) return a[0] - b[0]
        else return a[1] - b[1];
    });
    let intervalsLength = 0;
    let start = sint[0][0];
    let end = sint[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (sint[i][0] > end) {
            intervalsLength += end - start;
            start = sint[i][0];
            end = sint[i][1];
        } else {
            end = Math.max(end, sint[i][1]);
        }
    }
    return intervalsLength + end - start;
}