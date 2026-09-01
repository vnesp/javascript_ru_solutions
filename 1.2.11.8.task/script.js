'use strict';

const isInvalid = [
    age => !(14 <= age && age <= 90),
    age => !(14 <= age) || !(age <= 90),
    age => age < 14 || age > 90
];


for (let age of [0, 13, 14, 15, 39, 64, 89, 90, 91, 100])
    console.log(age, isInvalid.map(func => func(age)));
