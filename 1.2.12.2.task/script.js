'use strict';

let city = null;
console.log(city);

city ??= "Берлин";  // null ?? "Берлин" => "Берлин"
console.log(city);

city ??= null;      // "Берлин" ?? null => "Берлин"
console.log(city);

city ??= "Кёльн";   // "Берлин" ?? "Кёльн" => "Берлин"
console.log(city);

city ??= "Гамбург"; // "Берлин" ?? "Гамбург" => "Берлин"
console.log(city);

console.log('Answer =', city);
