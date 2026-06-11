'use strict';

let a;

a = 5 > 4;
console.log(a); // true

a = "ананас" > "яблоко";
console.log(a); // false

a = "2" > "12";
console.log(a); // true

a = undefined == null;
console.log(a); // true

a = undefined === null;
console.log(a); // false

a = null == "\n0\n";
console.log(a); // false

a = null === +"\n0\n";
console.log(a); // false
