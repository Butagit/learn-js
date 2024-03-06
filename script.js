
// touchstart срабатывает при возникновение касание этого элемента
//touchmove если палец прикасаеться элемента и начинает двигаться по нему
//touchend как только палец оторвался от элемента
//touchenter как только палец скользит по экрану и натыкаеться на этот элемент
//touchleave продолжил скользик в пределах этого элемента
//touchcancel возникает когда точко соприкосновение больше не регистрируеться на поверхности

document.addEventListener('DONContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.targetTouches[0].pageX); // показывает координаты касание пальца
        // console.log(e.targetTouches);
        // console.log(e.touches);
    });
    
    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();
    //     console.log('move');
    // });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('move');
    // });
});

// touches свойство которое выдает список всех пальцев которые сейчас взаимодействуют с экраном и не важно где они находятся
//targetTouches если нас интересует список пальцев которые взаимодействуют с конкрентным элементов 
//changedTouches список пальцев которые учавствуют в текущем событии(пример: если событие touchend то список будет содержать палец который был убран, даже если на экране остались другие пальцы)