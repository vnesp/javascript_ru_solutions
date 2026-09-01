'use strict';

const
    correct_login = 'Админ',
    correct_password = 'Я главный';

const login = prompt('Кто там?', '');

if (!login) {
    alert('Отменено');
} else if (login != correct_login) {
    alert('Я вас не знаю');
} else {
    const password = prompt('Пароль?', '');
    if (!password) {
        alert('Отменено');
    } else if (password != correct_password) {
        alert('Неверный пароль');
    } else {
        alert('Здравствуйте!');
    }
}
