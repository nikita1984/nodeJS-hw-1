/**
 * Функция проверяет является ли число простым.
 * @param {int} number Число, которое проверяем.
 * @returns {boolean} Вернет true, если число простое, иначе false.
 */
module.exports = function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
};