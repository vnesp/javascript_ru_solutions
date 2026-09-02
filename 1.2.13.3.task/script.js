'use strict';


function prefixVersion() {
    for (let i = 0; i < 5; i++) console.log( i );
    /*
        i   condition   output
        0
            0 < 5 (+)
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
    for (let i = 0; i < 5; ++i) console.log( i );
    /*
        i   condition   output
        0
            0 < 5 (+)
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


for (let func of [prefixVersion, postfixVersion]) {
    console.log(func.name);
    func();
}

// при инкременте значение переменной не используется, поэтому нет разницы при выполнении