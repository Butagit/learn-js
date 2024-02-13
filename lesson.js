"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(a);
console.log(b);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; //передавали сыылку

// copy.a = 10;

// console.log(copy);

// это функция создаст новый обьект перебирая старый
function copy(mainObj) {
    let objCopy = {};

// дальше мы запускаем перебирающую конструкицю которая называеться for in
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// ЕСТЬ 2 ОЧЕНЬ ВАЖНЫХ ПОНЯТИЯ ЭТО ГЛУБОКИЙ И ПОВЕРХНОСТНЫЕ КОПИИ!!!
// ПОВЕРХНОСТНАЯ КОПИЯ БЕРЕТ ВСЕ СВОЙСТВО ЧТО БЫЛИ В РОДИТЕЛЕЙ И СОЗДАЕТ НЕЗАВИСИМУЮ СТРУКТУРУ


const add = {
    d: 17,
    e:20
};

// Что бы поместить (соединить) маленький обьект в большой нужно
// console.log(Object.assign(numbers, add));

// что бы копировать в пустой обьект
const clone = Object.assign({}, add); //это поверхностная копия

clone.d = 24;

console.log(add);
console.log(clone);

// ЧТО БЫ СОЗДАТЬ КОПИЮ МАССИВА

const oldArray = ['a', 'b', 'c'];
// создаем новую переменную обращаемся к oldArray, если мы это так оставим то у нас положиться сыылка на массив
// slice - метод который позваоляет просто скопировать массив

const newArray = oldArray.slice();

newArray[1] = 'ncjscn';
console.log(newArray);
console.log(oldArray);

// ОПЕРАТОР РАЗВОРОТА - SPREAD - разворачивает структуру и превращает ее в набор каких-то данных

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'bloggers'],
      interner = [...video, ...blogs, 'vk', 'instagram'];

console.log(interner);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
  }

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAArray = [...array];
console.log(newAArray);

const q = {
    one: 1,
    two: 2
};

const newObject = {...q};
console.log(newObject);