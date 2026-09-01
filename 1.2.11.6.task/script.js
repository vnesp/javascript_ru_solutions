'use strict';

let value = NaN;

value &&= 10;       // NaN && 10 = NaN
console.log(value); // NaN

value ||= 20;       // NaN || 20 = 20
console.log(value); // 20

value &&= 30;       // 20 && 30 = 30
console.log(value); // 30

value ||= 40;       // 30 || 40 = 30
console.log(value); // 30

console.log('Answer =', value); // 30
