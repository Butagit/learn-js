"use sctrict";

// команда alert используеться что бы предупредить пользователя о чем-то важном
// alert('Hello');

// спросить что то у пользователя
// const result = confirm("Are you here?");
// console.log(result);

// команда для конкретного ответа пользователя

// const answer = +prompt("Вам есть 18", "18");
// что бы поменять (тип данных) значение строка на цифры нажно поставить + 

// const answer = +prompt("Вам есть 18", "18");

// что бы увидеть тип данных в которых будешь лежать переменная нужно прописать typeof

// console.log(typeof(answer));
// console.log(answer + 5);
// что бы проверить нужно написать console.log(answer + 5);
// !!! ВСЯ ИНФОРМАЦИЯ КОТОРАЯ ПРИХОДИТ ОТ ПОЛЬЗОВАТЕЛЯ БУДЕТ В ВИДЕ СТРОК

const answers = [];

answers[0] = prompt('как ваше имя?', '');
answers[1] = prompt('как ваше фамилия?', '');
answers[2] = prompt('как ваше отчество?', '');

// команда которая замещает весь контент на сайте
// document.write(answers);

// проверка answers на тип данных
console.log(typeof(answers));
