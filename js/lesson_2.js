//операторы
let x;
// сложение + addition

x = 5 + 8;
console.log(`Результат сложения: ${x}`);

//вычитание - subtraction

x = 9 - 5;
console.log(`Результат вычитания: ${x}`);

//Умножение * multiplication

x = 2 * 3;
console.log(`Результат умножения: ${x}`);

//Деление / division

x = 10 / 2;
console.log(`Результат деления: ${x}`);

//Взятие остатка от деления %  Taking the remainder of a division
x = 11 % 3;
console.log(`Результат взятия остатка от деления: ${x}`);

//Возведение в степень **  exponentiation
x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);

//Специальные возможности операторов Operator Accessibility

//Применение оператора сложения к строкам  Applying the addition operator to strings

let resultOne = "Dodik" + " " + "po" + " " + "Live";
console.log(resultOne);

//если хоть один операнд будет строкой все выражение станет строкой
let resultTwo = "Dodik " + 58;
console.log(resultTwo);
console.log(typeof resultTwo);

//Работа других операторов
let resultThree = "25" - 5;
console.log(resultThree);
console.log(typeof resultThree);

//Недопустимая операция
let resultFour = 3 * "Dodik";
console.log(resultFour);
console.log(typeof resultFour);

//Унарный оператор сложения +

let users = "25";
let admins = "10";
console.log(users + admins);
console.log(users + +admins);
console.log(Number(users) + Number(admins));

//Оператор присвоения

let a = 1 + 2;
let b = 2;

let result = 8 - (a = b + 3);
console.log("Результат в скобках: " + a);
console.log("Общий результат: " + result);

//инкремент ++  применять только к переменным

let addUser = 2;
addUser++;
console.log(addUser);

//декремент --
let removeUser = 2;
removeUser--;
console.log(removeUser);

//можно расположить операторы ++ и -- не только после, но и до переменной
//  если нужно сразу результат то префиксная (перед), если нужно увеличить
// и при этом получить значение переменной до увеличения - постфиксная.

//оператор запятая
let usersCounter = (8 + 2, 19 + 1);
console.log(usersCounter);

//Операторы сравнения

/*
a > b больше more
a < b меньше less
a >= b больше или равно greater or equal
a <= b меньше или равно less or equal
a == b равно equals
a != b не равно not equal
a === b строгое равно strict equals
a !== b  строгое не равно strict does not equal
*/

//Алфавитный порядок
console.log('Б' > 'А');
console.log('Скрипт' > 'Скрипка');

//Кол-во символов
console.log('Слайдер' > 'Слайд');

//Регистр маленькие буквы больше больших
console.log('Фрилансер' > 'фрилансер');

//Сравнение разных типов

//Преобразование в число
console.log('58' > 10);
console.log('007' == 7);

//Логическое значение true становится 1, false - 0
console.log(true == 1);
console.log(false == 0);

//Сравнение с Null u undefined

console.log(null === undefined); //false
console.log(null == undefined); //true

//Логические операторы
//Булевые значения Или
console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false

//Разные типы
console.log(1 || 0); //первое true это 1
console.log(true || 'Dodik'); //первое true это true
console.log(null || 58); //58
console.log(null || 'Dodik' || 0); //Dodik
console.log(undefined || '' || null || 0); //0 потому что все false будет последнее

//Оператор && (И) вычисляется слева на права, только увидел false сразу останавливается и выводит
//Приоритет у (И) больше чем у (Или)
//Оператор ! (Не) имеет наивысший приоритет
console.log(!true); //false

//Оператор обьединения с null (??)
//возвращает первый аргумент, если он не null / undefined, иначе второй
let name;
console.log(name ?? "Без имени"); //Без имени

console.log('35' + - "22"); //33-22
console.log('35' * "22"); //770
// console.log('558' > 22++); //error
let usersCounter1 = 0;
let newUsers1 = usersCounter1++;
console.log(newUsers1); //0
console.log(!false && 11 || 18 && !''); //11


 