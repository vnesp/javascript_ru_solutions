a = "" - 1 + 0;
console.log(typeof a, a);   // number -1

a = "" + 1 + 0;
console.log(typeof a, a);   // string 10

a = true + false;
console.log(typeof a, a);   // number 1

a = 6 / "3";
console.log(typeof a, a);   // number 2

a = "2" * "3";
console.log(typeof a, a);   // number 6

a = 4 + 5 + "px";
console.log(typeof a, a);   // string 9px

a = "$" + 4 + 5;
console.log(typeof a, a);   // string $45

a = "4" - 2;
console.log(typeof a, a);   // number 2

a = "4px" - 2;
console.log(typeof a, a);   // number NaN

a = "  -9  " + 5;
console.log(typeof a, a);   // string   -9  5

a = "  -9  " - 5;
console.log(typeof a, a);   // number -14

a = null + 1;
console.log(typeof a, a);   // number 1

a = undefined + 1;
console.log(typeof a, a);   // number NaN

a = " \t \n" - 2;
console.log(typeof a, a);   // number -2
