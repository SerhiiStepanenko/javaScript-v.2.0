//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.
let out1 = document.querySelector('.out-1');
let i = 1;
let elem1 = "";
function t1() {
    while (i <= 50){
        elem1 += `${i} `;
        i++;
    }
    out1.innerHTML = elem1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.
let out2 = document.querySelector('.out-2');
let elem2 = "";
let i2 = 0;
function t2() {
    while(i2 < 122){
        i2 += 2;
        elem2 += `${i2} `
    }
    out2.innerHTML = elem2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.
let out3 = document.querySelector('.out-3');
let elem3 = "";
let i3 = 25;
function t3() {
    while(i3 > 6){
        elem3 += `${i3} `;
        i3--;
    }
    out3.innerHTML = elem3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.
let out4 = document.querySelector('.out-4');
let elem4 = "";
let i4 = 77;
function t4() {
    while(i4 >= 35){
        elem4 += `${i4}_`;
        i4 -= 3;
    }
    out4.innerHTML = elem4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.
let out5 = document.querySelector('.out-5');
let elem5 = "";
let i5 = 1;
function t5() {
    while(i5 <= 17){
        if(i5 % 2 === 0){
            elem5 += i5 + "_**"
        }else{
            elem5 += i5 + "_*";
        }
        i5++;
    }
    out5.innerHTML = elem5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.
let out6 = document.querySelector('.out-6');
let inp6 = document.querySelector('.i-6');
let elem6 = "";
let i6 = 1;
function t6() {
    while(i6 <= inp6.value){
        let k6 = 1;
        while(k6 <= 6){
            elem6 += "*";
            k6++
        }
        elem6 += "<br>";
        i6++;
    }
    out6.innerHTML = elem6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.
let out7 = document.querySelector('.out-7');
let inp7 = document.querySelector('.i-7');

function t7() {
    let elem7 = "";
    let i7 = inp7.value;
    while(i7 >= 0){
        elem7 += `${i7} `;
        i7--;
    }
    out7.innerHTML = elem7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.
let out8 = document.querySelector('.out-8');
let inp81 = document.querySelector('.i-81');
let inp82 = document.querySelector('.i-82');
function t8() {
    let elem8 = "";
    let i8 = inp81.value;
    while(i8 <= inp82.value){
        elem8 += `${i8} `;
        i8++;
    }
    out8.innerHTML = elem8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.
let out9 = document.querySelector('.out-9');
let inp91 = document.querySelector('.i-91');
let inp92 = document.querySelector('.i-92');
function t9() {
    let elem9 = '';
    let a = +inp91.value;
    let b = +inp92.value;

    if(a > b){
        let t = a;
        a = b;
        b = t;
    }
    let i9 = a;
    while(i9 <= b){
        elem9 += i9 + " ";
        i9++;
    }
    out9.innerHTML = elem9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).
let out10 = document.querySelector('.out-10');
function t10() {
    let elem10 = "";
    let i10 = 1950;
    while(i10 <= 2000){
        elem10 += `${i10} `
        i10 += 2;
    }
    out10.innerHTML = elem10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two
let div11 = document.querySelectorAll('.div-11');
let out11 = document.querySelector('.out-11');
function t11() {
    let i11 = 0;
    let elem11 = "";
    while(i11 < div11.length){
        elem11 +=  `${div11[i11].innerText} `;
        i11++
    }
    out11.innerHTML = elem11;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’
let div12 = document.querySelectorAll('.div-12');

function t12() {
    let i12 = 0;
    while(i12 < div12.length){
        div12[i12].style.background = "orange";
        i12++;
    }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
let inp13 = document.querySelectorAll('.i-13');
function t13() {
    let i13 = 0; 
    while(i13 < inp13.length){
        inp13[i13].value = i13 + 1;
        i13++;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
let out14 = document.querySelector('.out-14');
let inp14 = document.querySelectorAll('.i-14');
function t14() {
    let elem14 = "";
    let i14 = 0;
    while(i14 < inp14.length){
        if(inp14[i14].checked){
            elem14 += inp14[i14].value;
        }
        i14++;
    }
    out14.innerHTML = elem14;
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.
let out15 = document.querySelector('.out-15');
function t15() {
    let elem15 = "";
    let i15 = 0;
    while(i15 <= 10){
        elem15 += (10 - i15) + " " + i15 + " ";
        i15++;
    }
    out15.innerHTML = elem15;
}

document.querySelector('.b-15').onclick = t15;
