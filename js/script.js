// const timer = setTimeout(function() {
    //     console.log('hi');
    // }, 2000);
    
    // такой способ используеться редко
    // const timer = setTimeout(function(text) {
    //     console.log(text);
    // }, 2000, 'okey');

const btn = document.querySelector('.btn');
let timerId;

let i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }

}



btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000); //тут функцию вызывать не нужно, мы передаем ссылку
//     timerId = setInterval(logger, 500); // сначало идет задержка 500 потом идет logger который прогружаеться 3 секунду потом задержка и опять logger и потом интервал не будет опять ждать 500, он думат что эти 500 уже прошли во время выполнение этой функции и он сразу же начнет запускать функцию logger
// });

// // setTimeout(logger, 2000); //может работать без назначение переменной, но лучше работать с потому что так мы сможем ее определить и в случае чего мы могли ее остановить

// // clearInterval(timerId); // таким способ мы остановили setTimeout и теперь в консоль ничего ничего не булет выводиться 

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId); 
//     }
//     console.log('text');
//     i++;
// }

// // РЕКУРСИВНЫЙ setTimeout , то есть окод всегда будет ждать строго отведенное ему время

// let id = setTimeout(function log() {
//     console.log('hi');
//     id = setTimeout(log, 500);
// }, 500);















