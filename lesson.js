"use strict";

// ООП это наука о том как делать правильную архитерктуру

let str = "some";
// на основание этой строчки мы создаем новую строчку
let strObj = new String(str); //теперь это новый обьект

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
}; 

const john = Object.create(soldier); //мы создаем обьект джон которые будет насоедоваться от оббькта солдат, ЭТО ВСЕ ПРОТОТИПЫ

john.sayHello();

// const John = {
//     health:100
// };

// устаревший метод его использовать не нужно, мы усановили прототипов john солдата
// John.__proto__ = soldier;  = ЭТОЙ

// console.log(John);
// console.log(John.armor);

// нужно использовать новые методы
// Object.setPrototypeOf(John, soldier); //это запись = 
