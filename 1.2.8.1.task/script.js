'use strict';

let a = 1, b = 1;
console.log(a, b);          // 1 1

let c = ++a;
console.log(a, b, c);       // 2 1 2

let d = b++;
console.log(a, b, c, d);    // 2 2 2 1
