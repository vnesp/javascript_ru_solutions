'use strict';

let num = +prompt('Введите произвольное число', '');
let sign;

if (num > 0)
    sign = 1;
else if (num == 0)
    sign = 0;
else
    sign = -1;

alert(sign);
