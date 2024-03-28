// rest оператор собирает элементы и обьединяет его в один массив
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

// параметры по умолчанию
function calcOrDouble(number, basic = 2) { // можно просто присвоить в basic 2
    // basic = basic || 2;
    console.log(number * basic)
}

calcOrDouble(3);

