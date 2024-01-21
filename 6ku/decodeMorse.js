// https://www.codewars.com/kata/54b724efac3d5402db00065e

const decodeMorse = morseCode => morseCode.split(' ').map(e => MORSE_CODE[e] || '?').join("").replace(/\?+/g,' ').trim();