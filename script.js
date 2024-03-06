'use strict';

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes); // позволяет получить нам все ноты и узлы которые находятся внутри этого родителя
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode); // если мыхотим использовать элемент 1 раз то нам не нужно его помещать в переменную!!!
// console.log(document.querySelector('#current').parentElement); // таким образом я точно буду знать что получаю элемент

// console.log(document.querySelector('[data-current="3"]').nextSibling); //что бы получить следующий за ним элемент то есть узлы(нота)
// console.log(document.querySelector('[data-current="3"]').previousSibling); //что бы получить следующий за ним элемент то есть узлы(нота)
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //что бы получить следующий за ним ЭЛЕМЕНТ

// позволяет нам перебрать все элементы которые находяться в псевдо коллекции
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
//таким способом мы оставили только элементы
}


