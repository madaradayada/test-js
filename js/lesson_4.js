//Цикл While

//Синтаксик
// while (Условие) {
//     Тело цикла
//     Тут будет выполняться код
// }

//Пример

// let num = 0;
// while (num < 5) {
//     console.log(num);
//     num++;
// }

// let num = 5;
// while (num) {
//     console.log(num);
//     num--;
// }

//Пример без {}
// let num = 5;
// while (num) console.log(num--);

// do...while используется когда нужно выпонить хотя бы одно тело цикла не зависимо верето true или нет
// let num = 0;
// do {
//     console.log(num);
//     num++;
// } while (num < 0);


//Цикл For
// for (Начало; Условие; Шаг) {
//     Тело цикла
//     Тут будет выполняться код
// }

//Пример можно убрать любую часть цикла
for (let num = 0; num < 5; num++) {
    console.log(num);
}

//Директива break не работает с оператором ?
let num1 = 0;
for (; num1 < 5; num1++) {
    console.log(num1);
    if (num1 == 2) break;
}
console.log(`Работа окончена, num = ${num1}`);

//Директива continue не работает с оператором ?
let num2 = 0;
for (; num2 < 5; num2++) {
    if (num2 == 2) continue;
    console.log(num2);
}

//Метки цикл в цикле
firstFor: for (let num3 = 0; num3 < 2; num3++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            break firstFor;
        }
        console.log(size);
    }
}

//вывести числа от 1 до 5
for (let num4 = 1; num4 <= 5; num4++) {
    console.log(`num4 : ${num4}`);
}

//zad2
// let num5 = 8;
// while (num5) {
//     console.log(num5); //1 last number
//     num5--; 
// }

//zad3
let num6 = 0;
while (num6 < 3) {
    console.log(`Число: ${num6}`);
    num6++;
}

//zad4 прекратить работу цикла когда size 1
firstFor: for (let num7 = 0; num7 < 2; num7++) {
    for (let size7 = 0; size7 < 3; size7++) {
        if (size7 == 1) {
            break firstFor;
        }
        console.log(size7);
    }
}