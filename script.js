'use strict';

// function Constructor (name) {
//     this.name = name;
//     this.age = 30;
// }


// console.log(Constructor.age);
// console.log(new Constructor('Дима'));
// console.log(new Constructor('Влад'));\

// const obj = {
//     name: 'Иван',
//     age: 20,
//     55 : 'hi'
// }

// console.log(obj[55]);

// let userInfo = {
//     name: 'David',
//     age: 20,
//     address: {
//         home: 2
//     }
// }

// for (let key in userInfo.address) {
//     let value = userInfo.address[key];
//     console.log(value);
// }

// const userInfo = {
//     name: 'Вася',
//     age: 30
// }

// userInfo.name = 'Лена';
// delete userInfo.name
// console.log(userInfo);


// let sourceName = 1.005 + Number.EPSILON;
// let numFour = Math.round(sourceName * 100) / 100;
// console.log(numFour);


// let num = parseFloat( '135.58px');
// console.log(num);

// let value = Math.max(10, 58, 39, -150, 0);
// console.log(value);

// let numm = Math.floor(58.858) ;
// console.log(numm);

// let smail = '\u{1f60d}';
// console.log(smail);

let text = 'фрилансер';
console.log(text.includes('лан', 3));

let s = 10 + +'10';
console.log(s);

// const mass = [
//     'hohohoh',
//     function() {
//         console.log('hi');
//     },
//     'hihihi'
// ]
// mass[1]();
// console.log(mass[2]);