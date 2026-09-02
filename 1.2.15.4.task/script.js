'use strict';

function pow_linear(x, n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= x;
    }
    return res;
}

function pow_log(x, n) {
    let res = 1;
    for (; n; n >>= 1) {
        if (n % 2) {
            res *= x;
        }
        x *= x;
    }
    return res;
}



for (const func of [pow_linear, pow_log]) {
    for (const [x, n, res] of [
        [3, 2, 9],
        [3, 3, 27],
        [1, 100, 1],
        [2, 16, 65536],
        [1.001, 1000, 2.716923932235],
        [1.00001, 100000, 2.71826823719],
    ]) {
        const ans = func(x, n);
        console.log(`${func.name}(${x}, ${n}) -> ${ans} (=== ${res})`, Math.abs(ans - res));
    }
}
