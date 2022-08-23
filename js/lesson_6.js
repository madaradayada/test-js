//Object

let userInfo = {
    name: "Vasya", //свойство объекта
    age: 30, //Последння (висячая) запятая
};

console.log(userInfo);
console.log(userInfo.name);

//Вычисляемое либо передаваемое имя
//Вычисляем имя
let firstPart = "likes";
let userInfo1 = {
    name1: "Vasya",
    age1: 30,
    [firstPart + " javascript"]: true,
};
console.log(userInfo1["likes javascript"]);

//Передаем имя
let firstPart2 = "likes";
let userInfo2 = {
    name1: "Vasya",
    age1: 30,
    [firstPart2]: true,
};
console.log(userInfo2[firstPart2]);

//Преймущество квадратных скобок
let key = "name1";
console.log(userInfo2.key); //undefined
console.log(userInfo2[key]); //Vasya

//Можно использовать зарезервированые слова типо let for i td
//может быть объект в объекте (вложеность)

//Добавление новых свойств
let usersInfo = {
    name: "Vasya",
}

usersInfo.age = 30; //Добавили свойсвто age = 30

usersInfo['likes javascript'] = true; //добавили с помощью квадратных скобок

usersInfo.address = {
    city: "Uzhhorod",
    street: "Freedom",
}; //добавили объект

console.log(usersInfo);

//удаление delete usersInfo.age

//изменение age  usersInfo.age = 18; поменяли 30 на 18
//можно изменить даже в константе
//при копирование объекта делается дубликат, а копируется только ссылка на него
//let user = usersInfo;

//Дублирование объектов (Object.assign)
let userInfo3 = {
    name: "Vasya",
    age: 30,
}

let user = Object.assign({}, userInfo3);

user.age = 19;

console.log(userInfo3);
console.log(user);

//Опциональная цепочка
let usersInfo4 = {
    name: "Vasya",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom",
    }
};

console.log(usersInfo4?.address?.street); //проверяем есть ли свойство street
//что бы не было ошибки если такого свойства нет

//оператор in
let userInfo5 = {
    name: "Vasya",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom",
    }
}
if ("name" in userInfo5) {
    console.log(userInfo5.name);
}

//Ипользуется в особом случае когда свойство сущетсвует, но его значение undefined

//for in     for (let key in object) { тело цикла выполняется для каждого свойства объекта}
let userInfo6 = {
    name: "Vasya",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom",
    }
}

for (let key in userInfo6) {
    //keys
    console.log(key); // name, age, address
    //значение ключей
    console.log(userInfo6[key]); //Vasya, 30, Object {}
} 

for (let key in userInfo6.address) {
    //keys
    console.log(key); // name, age, address
    //значение ключей
    console.log(userInfo6.address[key]); //Vasya, 30, Object {}
}

//методы Объектов
let userInfo7 = {
    name: "Vasya",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom",
    },
    // showInfo: function () {
    //     console.log(`${userInfo7.name}, ${userInfo7.age} лет. Адрес: г.${userInfo7.address.city}`);
    // }   //длинная запись
    showInfo () {
        console.log(`${userInfo7.name}, ${userInfo7.age} лет. Адрес: г.${userInfo7.address.city}`);
    } //короткая

}

userInfo7.showInfo();

//this
let userInfo8 = {
    name: "Vasya",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom",
    },
    showInfo() {
        console.log(`${this.name}, ${this.age} лет. Адрес: г.${userInfo7.address.city}`);
    }
}
userInfo8.showInfo();

//у стрелочных функциё нет своего this
// let show = () => console.log(`${this.name}, ${this.age}`);

//преймущество this
//привязка идет не к конкретной переменной, а к объекту

//Фкнкция-конструктор с большой буквы и должны вызываться с new
function UserInfo9(name) {
    // this = {}; создает пустой объект (неявно)

    this.name = name;
    this.age = 30;

    // return this; Возвращает объект (неявно)
}

console.log(new UserInfo9('Vasya'));
console.log(new UserInfo9('Lena'));


// Задача №8
/*
1. Создать пустой объект userInfo.
2. Добавить свойство name со значением Вася.
3. Добавить свойство age со значением 30.
4. Изменить значение свойства name на Лена.
5. Удалить свойство name из объекта.
*/

// 1. Создание пустого объекта userInfo:
userInfo = {
}
// вывод значений свойств в консоль
console.log(userInfo);

// 2. Добавление в объект userInfo свойства name со значением Вася:
userInfo = {
  name: "Вася",
}
// вывод значений свойств в консоль
console.log(userInfo);

// 3. Добавление в объект userInfo свойства age со значением 30:
userInfo = {
    name: "Вася",
    age: 30,
  }
// вывод значений свойств в консоль
console.log(userInfo);

// 4. Изменение значения для свойства name
userInfo.name = "Лена";
// вывод значений в консоль с учётом изменений
console.log(userInfo);

// 5. Удаление свойства из name из объекта userInfo
delete userInfo.name;
// вывод объекта (значения внутри) в консоль
console.log(userInfo);