"use strict";

// const arr = [1, 2, 3, 6, 8, 10];
// соотношение между свойством length и массивом, свойство length состоит из последнего индекса + 1
// console.log(arr.length);
// методы которые работают с концом массива
// удаляет последний элемент с нашего массива
// arr.pop();  

// этот эдемент позволяет нам быстро перебрать все элементы находящие в массивы, этот перебор можно настроить более подробнее!!!
// первый аргумент тот элемент который мы сейчас перебираем item
// следующий аргумент этот номер по порядку i
// 3 элемент это ссылка на тот массив который мы перебираем
// обычно все испльзуют этот способ для перебора 
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// добавляет элемент в конце массива
// arr.push(10);

// console.log(arr);
// что бы перегбрать все элементы массива мы можем написать
// этот цикл будет вырабатывать до тех пор пока не закончаться все элементы массива
// for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }
    
    // ТАКИЕ КОНСТРУКЦИИ ДЛЯ ПЕРЕБОРА РАБОТАЮТ ТОЛЬКО С МАССИВАМИ!!!!
// по мимо обычного цикла мы можем использовать,конструкцию перебора которая называеться for of 
// в этом методе есть свой +, тут мы можем использовать break и continue
// for (let value of arr) {
//     console.log(value);
// }
// что бы сформировать массив на основание строк
// const str = prompt("", ""):
// const products = str.split("", "");
// для сортировки, сортирует все как строки
// products.sort();
// что бы правильно отсортировать числа нужно
// function compareNum(a, b) {
//     return a - b;
// }

// console.log(products.join('; '));
// join нужен для того чтобы соединить массив с элементами

// на основание массива можем сформировать большую строку

// ПСЕВДО МАССИВ ЭТО ОБЬЕКТ СТРУКТУРА КОТОРАЯ СОВПАДАЕТ СО СТРУКТУРОЙ МАССИВА, У ПСЕВДО МАССИВОВ НЕТУ НИКАКИХ МЕТОДОМ!!