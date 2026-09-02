'use strict';

function bruteForce(n) {
    function isPrime(x) {
        if (x == 1)
            return false;
        for (let i = 2; i * i <= x; i++)
            if (x % i == 0)
                return false;
        return true;
    }

    for (let i = 1; i <= n; i++) {
        if (isPrime(i))
            console.log(i);
    }
}


function erathoSieve(n) {
    let isPrime = [false, false];
    for (let i = 2; i <= n; i++)
        isPrime[i] = true;


    for (let i = 2; ; i++) {
        let j = i * i;
        if (j > n)
            break;
        for (; j <= n; j += i)
            isPrime[j] = false;
    }

    for (let i = 1; i <= n; i++) {
        if (isPrime[i])
            console.log(i);
    }
}


for (let func of [bruteForce, erathoSieve]) {
    console.log(func.name);
    func(100);
}
