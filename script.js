'use strict';

// to string

// 1
console.log(String(null));
// таким способом мы можем превратить любой тип данных в строку
// console.log(typeof(String(4)));

// 2 способ конкатинация
console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 25 + 'px';

// to number

// 1 способ
console.log(typeof(Number('hi')));

// 2 способ

console.log(typeof(+"4"));

// 3 способ

console.log(typeof(parseInt('15px', 10)));

// to boolean 
// все это будет превращаться в false 
// 0, '', null, undefined, NaN
 
// 1 способ

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2 способ

console.log(typeof(Boolean('hi')));

// 3 способ

console.log(typeof(!!'hi'));

