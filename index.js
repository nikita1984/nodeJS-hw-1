// подключаем модуль colors, который мы будем использовать в подкраске нашего консольного вывода
const colors = require('colors/safe');

// извлекаем число начала диапазона из введённых в консоль данных
const start = parseInt(process.argv[2]);

// извлекаем число окончания диапазона из введённых в консоль данных
const end = parseInt(process.argv[3]);

// Если аргумент, переданный при запуске не является числом, то завершаем программу с ошибкой
if (isNaN(start) || isNaN(end)){
    console.error("Ошибка: В качестве обоих параметров должны быть числа");
    process.exit(1);
}

// создём массив для записи простых чисел
const primeNumbers = [];

// Перебираем диапазон и с помощью метода isPrime() добавляем найденные простые числа в массив
for (num = start; num <= end; num++){
    if (isPrime(num)) {
        primeNumbers.push(num);
    } 
}

// Если массив пустой, то выводим сообщение об отсутствии простых чисел
if (primeNumbers.length === 0){
    console.log(colors.red("В указанном диапазоне отсутвуют простые числа"));
}

// Перебираем массив простых чисел и выводим их в консоль соответствующим цветом
for (let num in primeNumbers){
    for (let i = 0; i <= primeNumbers.length - 1; i += 3){
        if (parseInt(num) === i) {
            console.log(colors.green(primeNumbers[num]));
            continue;
        }
        if (parseInt(num) === i + 1) {
            console.log(colors.yellow(primeNumbers[num]));
            continue;
        }
        if (parseInt(num) === i + 2) {
            console.log(colors.red(primeNumbers[num]));
            continue;
        }
    }
}

/**
 * Функция проверяет является ли число простым.
 * @param {int} number Число, которое проверяем.
 * @returns {boolean} Вернет true, если число простое, иначе false.
 */
function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}