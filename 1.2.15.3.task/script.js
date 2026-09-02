'use strict';

function min(a, b) {
    return a < b ? a : b;
}

for (const [arg1, arg2, res] of [
    [2, 5, 2],
    [3, -1, -1],
    [1, 1, 1],
]) {
    const ans = min(arg1, arg2);
    console.log(`min(${arg1}, ${arg2}) -> ${ans} (=== ${res})`, ans == res);
}
