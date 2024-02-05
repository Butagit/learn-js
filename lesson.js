"use strict";
// имя функции должно быть обязательно в виде глагола
function showFirstMessage(text) {
    // в () можно писать разные аргументы
    console.log(text);
    num = 10;
}
// что бы вызвать функцию нужно прописать 
showFirstMessage("Hello World!");
console.log(num);


// function calc(a, b) {
//     return (a + b);
//     // после return мы не сможем что тот задать так как он последний кодФ
// }

// console.log(calc(4, 3));
// console.log(calc(4, 9));
// console.log(calc(10, 7));

function ret() {
    let num = 50;

// 


    return num;
    // когда у нас идет function declaration то точку с запятой ставить не нужно
    // эту функцию можно вызывать перед обьявлением и создаеться она до начала выполнение скрипта function foo () {код}
}


// function expression в конце всегда нужно ставить точку с запятой ); и создаеться тогда когда доходит поток кода let foo = function() {код}
// что бы вывести на ружу переменную с обьекта
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('hello');
};

logger();
// синтаксис return позволяет очень сильно сократить код
// самое главное что такая функция не имеет контекстов вызова
// если у меня функция только в 1 строчку то можно опустить {} 
const calc = (a, b) => { return a + b };