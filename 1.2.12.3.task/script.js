'use strict';

function eta(num1, num2, result) {
    if (result === null || result === undefined) {
    if (num1 !== null && num1 !== undefined) {
        result = num1;
    } else {
        result = num2;
    }
    }

    console.log('eta res:', num1, num2, result);
}


function orsol(num1, num2, result) {
    result ||= num1 || num2;

    console.log('or res: ', num1, num2, result);
}


function sol(num1, num2, result) {
    result ??= num1 ?? num2;

    console.log('sol res:', num1, num2, result);
}



for (let [num1, num2, result] of [
        [undefined, undefined, undefined],
        [undefined, undefined, 30],
        [undefined, 20, undefined],
        [undefined, 20, 30],
        [10, undefined, undefined],
        [10, undefined, 30],
        [10, 20, undefined],
        [10, 20, 30],
        [10, 20, 30],
        [0, 0, 0],
        [0, 0, 30],
        [0, 20, 0],
        [0, 20, 30],
        [10, 0, 0],
        [10, 0, 30],
        [10, 20, 0],
        [10, 20, 30],
        [10, 20, 30],
    ]) {
    console.log();
    console.log('args:   ', num1, num2, result);
    eta(num1, num2, result);
    orsol(num1, num2, result);
    sol(num1, num2, result);
}