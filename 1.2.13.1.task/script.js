'use strict';

let i = 3;

while (i) {
  console.log( i-- );
}

/*
    i   condition   output
    3
        3 != 0 (+)
                    3
    2
        2 != 0 (+)
                    2
    1
        1 != 0 (+)
                    1
    0
        0 != 0 (-)
*/