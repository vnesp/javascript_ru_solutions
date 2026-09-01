'use strict';

console.log( 1 && null && 2 );

// 1 && null == null
// null && 2 == null

console.log( 1 && null ); // null
console.log( null && 2 ); // null

