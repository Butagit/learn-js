"use strict";

if (4 == 9) {
    console.log('ok'); 
    // если выражение верно то пишеться то что в скобках
} else {
    console.log('error'); 
    // если же не верно пишеться то что в скобках
} 
 
// 1 способ
// const num = 50;

// if (num < 49) {
    // console.log('error');
// } else if (num > 100) {
    // console.log('more');
// } else {
    // console.log('ok');
// }

// 2 способ
// тернарный оператор
// (num === 50) ? console.log('ok') : console.log('error');

const num = 51;

// модификация которая поддерживает несколько проверок и условий
switch (num) {
    // для того что бы начать проверку надо написать кейс
    case 49:
        console.log('ne');
        break;
    case 100:
        console.log('no');
        break;  
    case 50:
        console.log('yes');
        break;
// выбрать какое то действие по умолчанию если ни один кейс не сработал
    default:
        console.log('ne v etot raz');
        break;
}
