// подключаем модуль colors, который мы будем использовать в подкраске нашего консольного вывода
let colors = require('colors/safe');

// получаем массив с введёнными числами
let input = process.argv;

// извлекаем число начала диапазона
let start = parseInt(input.splice(2, 1), 10);

// извлекаем число окончания диапазона
let end = parseInt(input.splice(2, 1), 10);

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

/**TODO: написать js-doc
 * 
 * @param {*} number 
 * @returns 
 */
function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}