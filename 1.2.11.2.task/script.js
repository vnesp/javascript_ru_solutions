'use strict';

console.log( console.log(1) || 2 || console.log(3) );

// console.log(1) - outputs 1, retunrs undefined
// console.log(1) || 2 = 2
// 2 || console.log(3) = 2 (without evaluating console.log(3))
// console.log(2) - outputs 2

console.log( console.log(1) ); // 1, undefined
console.log( undefined || 2 ); // 2
console.log( 2 || console.log(3) ); // 2
