
const box = document.querySelector('.box')
const button = document.querySelector("button");
// const height = box.clientHeight;
// const width = box.clientWidth;
// const height = box.offsetHeight;
// const width = box.offsetWidth;
// const height = box.scrollHeight;
// const width = box.scrollWidth;

button.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px'; 
    console.log(box.scrollTop); 
})

console.log(height, width);


// получает все координаты которые есть у элемента 
console.log(box.getBoundingClientRect);
// если мы смотрит расстояние right то мы должны знать что это считаеться от левой границы до правой границы элемента
// когда мы смотрим с низу у нас bottom рассчитываеться с верхней гарницы до нижней границы элемента 
// console.log(box.getBoundingClientRect.top); тут мы получим только значение top

// как получить стили которые уже были применены из css 

const style = window.getComputedStyle(box,);

console.logs(style); //так же через точку мы можем выбрать нужный нам стиль
// мы не можем просто так работать с псевдо элеметами, но стили псевдо элеметов мы можем получить что бы это сделать нужно прописать сюда как 2 значение 
// const style = window.getComputedStyle(box,);

console.log(document.documentElement.scrollTop); //для того что юы узнать количество пикселей
