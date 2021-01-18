// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7;
let d = 9;
let result = a / b;
let out2 = document.querySelector('.out-2').textContent = result;


// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
let e = 3;
let f = 5;
let result2 = e + f;
let out3 = document.querySelector('.out-3').textContent = result2;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = '3';
let f1 = 5;
let result3 = e1 + f1;
let out4 = document.querySelector('.out-4').textContent = result3; //браузер преобразует число в строку и объединяет две строки вместе. 

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
let e2 = 3;
let f2 = 0;
let result4 = e2 / f2;
document.querySelector('.out-5').textContent = result4;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3;
let f3 = 'Hello';
let result5 = e3 / f3;
document.querySelector('.out-6').textContent = result5; 

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3;
let f4 = 'Hello';
let result6 = e4 / f4;
document.querySelector('.out-7').textContent = result6; 

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let inp8 = document.querySelector('.inp-8');

function t8() {
    console.log(inp8.value);
    inp8.value = '';
}

document.querySelector('.b-8').onclick = t8;
//объясните пожалуйста почему t8 вызывается без скобок и работает,
//а при вызове со скобками не работает, в чем отличие t8 от t8()??????

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
let i9 = document.querySelector('.i-9');
let out9 = document.querySelector('.out-9');
function t9() {
    out9.innerHTML = i9.value;
    i9.value = '';
}

document.querySelector('.b-9').onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
let i10 = document.querySelector('.i-10');
let out10 = document.querySelector('.out-10');
function t10() {
    out10.innerHTML = i10.value * 10;
    i10.value = '';
}

document.querySelector('.b-10').onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.
let i11 = document.querySelector('.i-11');
let out11 = document.querySelector('.out-11');
function t11() {
    out11.innerHTML = +i11.value + 10;
    i11.value = '';
}

document.querySelector('.b-11').onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
let i12_1 = document.querySelector('.i-12_1');
let i12_2 = document.querySelector('.i-12_2');
let out12 = document.querySelector('.out-12');
function t12() {
    out12.innerHTML = `Hello ${i12_1.value} ${i12_2.value}`;
    i12_1.value = '';
    i12_2.value = '';
}

document.querySelector('.b-12').onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.
let i13_1 = document.querySelector('.i-13_1');
let i13_2 = document.querySelector('.i-13_2');
let out13 = document.querySelector('.out-13');
function t13() {
    let result13 = +i13_1.value + (+i13_2.value);
    out13.innerHTML = 'Result: ' + result13;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
let hi = 'Hello';
document.querySelector('.i-14').value = hi; 

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.i-15');
y.style.border = '2px solid red';

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16
let i16_1 = document.querySelector('.i-16-1');
let i16_2 = document.querySelector('.i-16-2');
let out16 = document.querySelector('.out-16');
function t16() {
    let result16 = +i16_1.value + (+i16_2.value);
    out16.innerHTML = 'Result: ' + result16;
}

document.querySelector('.b-16').onclick = t16;


// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let t = document.querySelector('.i-17');
let out17 = document.querySelector('.out-17');
t = parseInt(t);
function t17() {
    out17.innerHTML = t;

}

document.querySelector('.b-17').onclick = t17; // у меня всегда выводится NaN, может я что то не правильно делаю?

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let t2 = document.querySelector('.i-18');
let out18 = document.querySelector('.out-18');
t2 = parseFloat(t2);
function t18() {
    console.log(t2);

}

document.querySelector('.b-18').onclick = t18; // та же ситуация что и с 17 заданием, выводит NaN во всех случаях

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

let i19_1 = document.querySelector('.i-19-1');
let i19_2 = document.querySelector('.i-19-2');
let out19 = document.querySelector('.out-19');
function t19() {
    let result19 = +i19_1.value + (+i19_2.value);
    out19.innerHTML = 'Result: ' + result19;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
let i20_1 = document.querySelector('.i-20_1');
let i20_2 = document.querySelector('.i-20_2');
let i20_3 = document.querySelector('.i-20_3');
let i20_4 = document.querySelector('.i-20_4');
let out20 = document.querySelector('.out-20');
function t20() {
    out20.innerHTML = `Уважаемый(-ая) ${i20_1.value}, ${i20_2.value}, ваш возраст ${i20_3.value} года, по профессии вы ${i20_4.value}`;
}

document.querySelector('.b-20').onclick = t20;