'use strict';

function promptNumberGreaterThan(bound) {
    let result;
    do {
        result = prompt(`Введите число, большее ${bound}`, '');
    } while (result !== null && +result <= bound);
    return result;
}

promptNumberGreaterThan(100);
