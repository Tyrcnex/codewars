// https://www.codewars.com/kata/52685f7382004e774f0001f7

// unreadable code for a human readable format ;)
humanReadable=s=>[~~(s/((2<<2*2+1)-(2<<1))**2),~~((s/((2<<2*2+1)-(2<<1)))%((2<<2*2+1)-(1<<2))),~~(s%((2<<2*2+1)-(2<<1)))].map(e=>('0'+e).slice(-(1<<1))).join(':');