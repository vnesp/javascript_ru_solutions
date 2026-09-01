'use strict';

console.log(undefined ?? NaN ?? null ?? "" ?? " ");

// undefined ?? NaN == NaN
// NaN ?? null == NaN
// NaN ?? "" == NaN
// NaN ?? " " == NaN

console.log(undefined || NaN || null || "" || " ");

// undefined || NaN == NaN
// NaN || null == null
// null || "" == ""
// "" || " " == " "
