'use strict';

function ifVersion(number) {
  if (number === 0) {
    alert('Вы ввели число 0');
  }

  if (number === 1) {
    alert('Вы ввели число 1');
  }

  if (number === 2 || number === 3) {
    alert('Вы ввели число 2, а может и 3');
  }
}

function switchVersion(number) {
  switch (number) {
    case 0:
      alert('Вы ввели число 0');
      break;
    case 1:
      alert('Вы ввели число 1');
      break;
    case 2:
    case 3:
      alert('Вы ввели число 2, а может и 3');
  }
}


const number = +prompt('Введите число между 0 и 3', '');
for (let func of [ifVersion, switchVersion]) {
  alert(`function ${func.name}`);
  func(number);
}
