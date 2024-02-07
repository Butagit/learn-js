"use strict";

// что такое callback это функция которая должна быть выполнена после того как другая функция завершила свое выполнение!!!!

function first() {
    // do something
    // это позволяет сделать задержку вызова функции на пол секунды
    setTimeout(function() {
        console.log(1);
    }, 500);
}

// если функции идут одна за другой это не значит что выполняеться она так же !!!

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`)
    callback();
}

// анонимная функция после выполнение этой функции мы не сможем к ней обратиться
// learnJS("JavaScript", function() {
//     console.log("И это правильный ответ!");
// });

// что бы передать функцию нужно написать
function done(){
    console.log("И это правильный ответ!");
}
// когда передаешь функцию не надо после done ставть (), а сразу писать без ()
learnJS("JavaScript", done);