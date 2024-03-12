'use strict';
// 'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)  
//         return this.a + this.b
        
//     }
// }

// showThis(4, 5);

// 1) обычная функция: this = window, если use strict = undefined

// const obj = {
//     a: 5,
//     b: 8,
//     show: function() {
//         console.log(this);
//         function showThis() {
//             console.log(this);
//         }

//         showThis();
//     }
// };

// function showThis() {
//     console.log(this);
// }
// showThis();

// obj.show()


// 2) контекст метода обьекта - сам обьект

// function User (name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log('Hello' + this.name);
//     };
// }

// let Ivan = new User('Ivan', 30);
// Ivan.hello();
// console.log(Ivan);

// 3) this в конструкторах и классах - это экземпляр обьекта

// function sayName() {
//     console.log(this);
//     console.log(this.name + 'Smith');

// }

// const user = {
//     name: 'John'
// }

// sayName.call(user, 'Smith' ); //  позволяет связать функцию с обьектом 
// sayName.apply(user, ['Smith']); // тоже самое только у них разный синтаксис


// создает новую функцию и под нее уже подвязывет контекст

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2) // в эту переменную мы помещаем новую функцию она должна удваивать любое число
// console.log(double(3)); 
// console.log(double(13));  

// 4) ручная привязка this: call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () { // если у нас callback функция будет вот такая то this будет сам элемент на котором произошло событие
//     // console.log(this);
//     this.style.backgroundColor = 'red';  
// })

// // в стрелочной функции если она находиться в родителе а родитель это метод (функция) то при вызове this в общем итоге она выводит сам обьект
// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         }
//     }
// }





