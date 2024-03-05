'use strict';

// СОБЫТИЕ ЭТО СИГНАЛ ОТ БРАУЗЕРА О ТОМ ЧТО У НАС ЧТО ТО ПРОИЗОШЛО (клик, наведение мыши и тд)

// что бы использовать событие мы должны назначить обработчика события (функция которая срабатывает как только событие прошло) 


// 1 способ в файле html


// 2 способ это использовать доп дерево для событий

// const btn = document.querySelector('button');
const btns = document.querySelectorAll('button');

// btn.onclick = function() {
//     alert('click');  //В реальных проектов такой кот почти не используется
// };              //это дом дерево, ЕСЛИ СОБЫТИЕ ПРОШЛО И МЫ ХОТИМ ЕГО ЗАТЕРЕТЬ ЧТО БЫ БОЛЬШЕ С ЭЛЕМЕНТОМ НЕЛЬЗЯ БЫЛО ВЗАИМОДЕЙСТВОВАТЬ 
// // ТО УДАЛИТЬ МЫ ЕГО УЖЕ НЕ СМОЖЕМ

// btn.onclick = function() {
//     alert('second click');
// }; 

// 3 способ

// его большой + то что мы можем сразу назначать несколько действий на одно событие
// btn.addEventListener('click', () => {
//     alert('Click');
// });  

// btn.addEventListener('click', () => {
//     alert('second click');
// });  

const overlay = document.querySelector('.overlay');
// let i = 0;

// ВСПЛЫТИЕ СОБЫТИЕ ЭТО КОГДА ОБРАБОТЧИК СРАБАТЫВАЕТ СНАЧАЛА НА САМОМ ВЛОЖЕННОМ ЭЛЕМЕНТЕ ПОТОМ НА РОДИТЕЛЕ (ЕСЛИ У НЕГО ЕСТЬ) И ТАК ВЫШЕ И ВЫШЕ

const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // console.log(e.currentTarget); чаще всего применяеться просто event.target
};  
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('mouseenter', deleteElement);
//     }
// };  

// btn.addEventListener('mouseenter', deleteElement);
// overlay.addEventListener('mouseenter', deleteElement);



// btn.addEventListener('mouseenter', (e) => {
//     // console.log(e.target);
//     e.target.remove();
//     // console.log('Hover');
// });  

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); // для того что бы отменить стандартное поведение браузера писать его нужно в самое начало кода

    console.log(event.target);
});


// благодоря этому можно обращаться ко всем кнопкам (querySelectorAll)
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); //once озночает что обработчик должен был вызвал не более 1 раза
});










