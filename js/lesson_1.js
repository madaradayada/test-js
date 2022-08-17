
//Undefined

let userName;

console.log(typeof userName);

//String

userName = "Dodik";

console.log(typeof userName);

//Number

userName = 58;

console.log(typeof userName);

//Boolean

let trueOrFalse = 58 < 18;
console.log(trueOrFalse);

//NaN

let getNan = 'Dodik' / 10;
console.log(getNan);
console.log(typeof getNan);

//bigInt

const bigInteger = 213232132313123131331313123312n;
console.log(typeof bigInteger);

//string

let userAge = 36;
let userAgeInfo = `Возраст: ${userAge}`;
console.log(userAgeInfo);

//Object

let userInfo = {
    name: 'Dodik',
    age:36
}

console.log(userInfo);
console.log(typeof userInfo);

//Symbol

let id = Symbol("id");
console.log(typeof id);

//Function

let funcVariable = function name(params) {
    //код функции
}
console.log(typeof funcVariable);


//преобразование типов

//строковое преобразование

let userAge1 = 58;
console.log(userAge1);
console.log(typeof userAge1);

userAge1 = String(userAge1);
console.log(userAge1);
console.log(typeof userAge1);

let userTrue1 = true;
console.log(userTrue1);
console.log(typeof userTrue1);

userTrue1 = String(userTrue1);
console.log(userTrue1);
console.log(typeof userTrue1);

//Численное преобразование, если нет числа будет NaN

let userAge2 = "58";
console.log(userAge2);
console.log(typeof userAge2);

userAge2 = Number(userAge2);
console.log(userAge2);
console.log(typeof userAge2);

//Автоматическое преобразование

let userAge3 = "72" / "2";
console.log(userAge3);
console.log(typeof userAge3);

//Логическое преобразование, число 0 и пустая строка вернет false, строка "0" или " " вернет true так как она не пустая

let userAge4 = 58;
console.log(userAge4);
console.log(typeof userAge4);

userAge4 = Boolean(userAge4);
console.log(userAge4);
console.log(typeof userAge4);




 


