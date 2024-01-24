"use sctrict";

// прямо внутри строки мы можем вставлять значение переменной
// для того что-бы сформировать url путь куда будет переходить пользователь
const category = 'toys';

// старый способ не практичный 
// console.log('https://someurl.com/' + category + '/' + '4');

// способ - интерполяция
console.log(`ttps://someurl.com/${category}/5`);

const user = "Ivan";

alert(`Hi, ${user}`)
