'use strict';

console.log( console.log(1) && console.log(2) );

// сonsole.log(1) - outputs 1, returns undefined
// undefined && console.log(2) = undefined (without evaluating console.log(2))
// console.log(undefined) - outputs undefined

console.log( console.log(1) ); // 1, undefined
console.log( undefined && console.log(2) ); // undefined

