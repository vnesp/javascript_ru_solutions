'use strict';

console.log( null || 2 && 3 || 4 );

// 2 && 3 == 3
// null || 3 == 3
// 3 || 4 == 3

console.log( 2 && 3 ); // 3
console.log( null || 3 ); // 3
console.log( 3 || 4 ); // 3
