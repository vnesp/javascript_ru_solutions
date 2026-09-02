'use strict';


function solution1() {
    for (let i = 2; i <= 10; i += 2)
        console.log(i);
}


function solution2() {
    for (let i = 2; i <= 10; i++)
        if (i % 2 == 0)
            console.log(i);
}


function solution3() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2) continue;
        console.log(i);
    }
}


for (let func of [solution1, solution2, solution3]) {
    console.log(func.name);
    func();
}
