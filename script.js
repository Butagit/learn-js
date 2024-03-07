const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block')

// console.log(btns[0].classList.length); //узнаем сколько классов присвоенно кнопки
// console.log(btns[0].classList.item(0)); //позволяет получить класс который распологаетьсся под определенным индексом
// // console.log(btns[0].classList.add('red', 'tndjnvdnjfg')); //можно добавлять классы 
// console.log(btns[1].classList.add('red')); //можно добавлять классы 
// // console.log(btns[0].classList.remove('blue')); //удаляет классы
// // console.log(btns[0].classList.toggle('blue')); //с помощью этого метода мы сможем добавить класс если его нету и удалить его если он есть

// //позваоляет проверять наличие класса на определенном элементе определенного класса и возвращает нам булиновое значение
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// } 

btns[0].addEventListener('click', (e) => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');      
    // } else {
    //     btns[1].classList.remove('red');
    // } 
//метод toggle работает так же
    btns[1].classList.toggle('red');
});

// УСТАРВЕШИЙ МЕТОД
// его использовать не надо
// console.log(btns[1].className);

// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ!!!!!

// СУТЬ в том что мы берем элемент который является родителем для все кнопок например и потом назначание обработчика клика на родителя

wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.classList.contains('blue')) {
    //     console.log('hi');
    // }
    // if (event.target && event.target.tagName == 'BUTTON') {
    //     console.log('hi');
    // }
    if (event.target && event.target.matches('button.red')) { //по простому это значит что какой то элемент совпадает с чем то, мы можем проверять на определенные совпадение
        console.log('hi');
    }
})

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
