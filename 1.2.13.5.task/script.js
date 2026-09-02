`use strict`;


function forVersion() {
    for (let i = 0; i < 3; i++) {
        console.log( `number ${i}!` );
    }
}


function whileVersion() {
    let i = 0;
    while (i < 3) {
        console.log( `number ${i}!` );
        i++;
    }
}


for (let func of [forVersion, whileVersion]) {
    console.log(func.name);
    func();
}
