'use strict';

let cond;

cond = -1 || 0; // (-1 || 0) == -1
console.log(cond);
if (cond) console.log( 'first' );   // => output 'first'

cond = -1 && 0; // (-1 && 0) == 0
console.log(cond);
if (cond) console.log( 'second' );  // => no output

cond = null || -1 && 1; // (null || -1 && 1) == (null || (-1 && 1)) == (null || 1) == 1
console.log(cond);
if (cond) console.log( 'third' );   //  => output 'third'

cond = (null || -1) && 1; // ((null || -1) && 1) == (-1 && 1) == 1
console.log(cond);
if (cond) console.log( 'fourth' );  //  => output 'fourth'
