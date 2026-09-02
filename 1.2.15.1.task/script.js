'use strict';

function checkAgeWithElse(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}

for (let age of [17, 18, 19]) {
    checkAgeWithElse(age);
    checkAge(age);
}

// Отличий нет, поскольку return в положительной ветви не позволяет продолжить выполнение команд за пределами оператора if
