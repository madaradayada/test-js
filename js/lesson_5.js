//Functions
//название должно быть простое и обозначающие дейсвтие
//show что то показывает
//get возвращает значение
//calc что то вычисляют
//create что то создают
//check что то проверяют и возвращают логическое значение

/*
Примеры:
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
*/

function showMessage() {
    console.log('Message');
}

showMessage(); //вызов функции будет столько раз сколько мы раз вызовем

//Вложенность и видимость функции

function getSumm() {
    let numOne, numTwo;

    function getNumOne() {
        numOne = 1;
    }
    
    function getNumTwo() {
        numTwo = 2;
    }
    getNumOne();
    getNumTwo();

    let numSumm = numOne + numTwo;
    console.log(numSumm);
}
//getNumOne();  вызов дочерне функции за пределами родительской вызовет ошибку 
getSumm();

//Бывают внешние и локальные переменные, лучше использовать внешние
//Локальные нельзя посмотреть вне
//Внешние функции которые объявлен за пределами всех функций называют глобальными

//Функции с параметрами

function calcSumm1(numOne1, numTwo1) {
    console.log(`Переменная numOne:${numOne1}`);
    console.log(`Переменная numTwo:${numTwo1}`);

    let numSumm1 = numOne1 + numTwo1;

    console.log(`Summ:${numSumm1}`);
}

calcSumm1(1, 2);

//CallBack function 

function calcSumm2(numOne2, numTwo2, more, less) {
    let numSumm2 = numOne2 + numTwo2;

    if (numSumm2 > 3) {
        more();
    } else {
        less();
    }
}

function showMoreMessage() {
    console.log("Больше чем 3");
}
function showLessMessage() {
    console.log("Меньше чем 3");
}
calcSumm1(1, 5, showMoreMessage, showLessMessage);

//Возврат результата

function calcSumm3(numOne3, numTwo3) {
    let numSumm3 = numOne3 + numTwo3;

    //return возврат
    return numSumm3;

    //Дальше код не выполняется
}
let funcRezult = calcSumm3(1, 2);

console.log(`Summ: ${funcRezult}`);

//разница между функцией и функциональным вырожением в том что
//функцию можно вызвать всегда, а вырожение только после его создания

//стрелочные функции

/*Функиональное выражение (Function Expression)

let имя переменной = function (параметр, ...параметр) {
    return выражение;
}

//Стрелочная функция (arrow function)
let имя переменной = (параметр, ...параметр) => выражение

*/

//Однострочная стрелочная функция
let getMessage = (text, name1) => text + ', ' + name1 + '!';

console.log(getMessage('Hi', 'Vasya'));

//В многострочной используем для выражения {} и return в них

//Планирование setTimeout (один раз) i setInterval ( резулярно чере интервал)

//setTimeout(функция или код, задержка, параметр, ...параметр);
//setInterval(функция или код, задержка, параметр, ...параметр);


function showName() {
    console.log('Vasya!');
}
setTimeout(showName, 0);
console.log('Kolya!'); //будет первым

'use stcrict'
let showMessage1; //нужно было добавить эту сторчку что бы работало
if (2 > 1) {
	showMessage1 = function () {
		console.log('Сообщение');
	};
}
showMessage1();

