'use strict';
// рефакторинг кода это когда была переменная которая использовалась 1 раз потом оказываеться что она используеться еще раз и мы просто перемещаем ее 
// сюда
// то есть создаем переменую
const header = document.getElementById('header');
const btns = document.getElementsByTagName('button');
const ref = document.getElementsByClassName('ref');
const hearts = document.querySelectorAll('.heart'); 
const oneHearts = document.querySelector('.heart'); 
const wrapper = document.querySelector('.wrapper');
const nan = document.querySelectorAll('.nan');
// const logo = document.getElementsByClassName('header_logo');
// header.style.backgroundColor = 'red';
// header.style.width = '100px';
btns[2].style.borderRadius = '100%';
// для класса нужно обязательно указывать его нумерацию
ref[1].style.backgroundColor = 'red';

// css текст через него можно назначит несколько инлайн стилей
header.style.cssText = 'background-color: blue; width: 150px';
// const num = '150';
// header.style.cssText = `background-color: blue; width: ${num}px `; //можно еще так писать
// мы делаем перебор если нам надо над несколькими элементами сделать одни и теже действия
// переменную i нужно начинать и 0 так как элементы в массивах начинаються с 0
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'red';
// };

// метод forEach работает ТОЛЬКО если используешь querySelectorAll
hearts.forEach(item => {
    item.style.backgroundColor = 'red';
});    

// основные методы с работой страницы

const div = document.createElement('div');
// const text = document.createTextNode('text'); // этот метод используеться очень редко

// что бы поменять элемент координально нужно
// мы модифицируем css классы элементов

div.classList.add('black');

// что бы добавить див в конце элемента body нужно
// document.body.append(div);
wrapper.append(div);
// что бы поместить элемент в другого родителя нужно
// document.querySelector('.header_logo').append(div);

// элемент которые вставляет в начало

// wrapper.prepend(div);

// таким способом мы можем ставить элементы перед другими

// hearts[1].before(div);

// таким способом мы можем ставить элементы после других

// hearts[1].after(div);

// таким способом можно удалить элемент

// ref[0].remove();

// что бы заменить 1 элемент другим

// hearts[0].replaceWith(ref[1]);

// УСТАРЕВШИЕ МЕТОДЫ !!!!!!

// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[0]);

// wrapper.removeChild(nan[0]);

// wrapper.replaceChild(ref[0], hearts[0]);
// ----------------------------------------------------------------------------------

div.innerHTML = 'Hello world';

// остановился 26.41
