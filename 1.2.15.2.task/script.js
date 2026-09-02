'use strict';


function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}


function checkAge1(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}


function checkAge2(age) {
  return age > 18 || confirm('Родители разрешили?');
}


const age = +prompt('Введите возраст', '18');
for (let func of [checkAge, checkAge1, checkAge2]) {
  alert(`function ${func.name}`);
  alert(func(age));
}
