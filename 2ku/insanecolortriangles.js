// https://www.codewars.com/kata/5a331ea7ee1aae8f24000175

// https://math.stackexchange.com/questions/2257158/three-color-triangle-challenge

function ncrmod3(n, r) {
    let nb3 = n.toString(3);
    let rb3 = r.toString(3);
    rb3 = '0'.repeat(nb3.length - rb3.length) + rb3;
    let prod = 1;

    for (let i = 0; i < nb3.length; i++) {
        let ni = +nb3[i];
        let ri = +rb3[i];
        if (ni < ri) return 0;
        if (ni === 2 && ri === 1) prod *= 2;
    }
    return prod % 3;
}

function triangle(row) {
    let vec = row.split('').map(e => 'RGB'.indexOf(e));
    let sign = row.length % 2 === 0 ? 2 : 1;
    let sum = 0;
    for (let i = 0; i < row.length; i++) {
        sum += vec[i] * ncrmod3(row.length - 1, i);
    }
    return 'RGB'[(sum*sign) % 3];
}