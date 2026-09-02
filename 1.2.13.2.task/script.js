'use strict';


function prefixVersion() {
    let i = 0;
    while (++i < 5) console.log( i );
    console.log('after cycle:', i);
    /*
        i   condition   output
        0
        1
            1 < 5 (+)
                        1
        2
            2 < 5 (+)
                        2
        3
            3 < 5 (+)
                        3
        4
            4 < 5 (+)
                        4
        5
            5 < 5 (-)
    */
}


function postfixVersion() {
    let i = 0;
    while (i++ < 5) console.log( i );
    console.log('after cycle:', i);
    /*
        i   condition   output
        0
            0 < 5 (+)
        1
                        1
            1 < 5 (+)
        2
                        2
            2 < 5 (+)
        3
                        3
            3 < 5 (+)
        4
                        4
            4 < 5 (+)
        5
                        5
            5 < 5 (-)
        6
    */
}


for (let func of [prefixVersion, postfixVersion]) {
    console.log(func.name);
    func();
}
