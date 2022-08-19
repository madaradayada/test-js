//IF (Если)
let message = "hi, freelancer!";

if (2 > 1) {
    //код выполниться если вернется true
    console.log(message);
}

//Блок Else
let message1 = "Привет, фрилансер!";
let number = 5;

if (number > 6) {
    console.log(message1);
} else {
    console.log('Условие не выполнено :(');
}

//else if
let message2 = "Привет, фрилансер!";
let number2 = 5;

if (number2 > 50) {
    console.log('5 больше 50');
} else if (number2 > 30) {
    console.log('5 больше 30');
} else if (number2 > 1) {
    console.log('5 больше 1');
} else {
    console.log('Условие не выполнено :(');
}

//Условный оператор "?"  лучше использовать когда 1 условие
let message3 = 'Hi';
// let messageEnd;

// if (5 > 1) {
//     messageEnd = ', Olya!';
// } else {
//     messageEnd = ', Vasya!';
// }

let messageEnd = (5 > 1) ? ',Vasya!' : ', Olya!';

let messageEnd2;

messageEnd2 = 5 > 10 ? ',Vasya!' :
    5 > 30 ? ',Olya!' :
        5 > 1 ? ',Andrej!' : ',Inna!';

message3 += messageEnd2;
console.log(message3);

