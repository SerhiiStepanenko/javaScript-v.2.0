//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>
let out1 = document.querySelector('.out-1');
function t1() {
    let elem1 = "";
    for(let i = 0; i < 3; i++){
        for(let k = 0; k < 3; k++){
            elem1 += "*";
        }
        elem1 += "_";
    }
    out1.innerHTML = elem1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
let out2 = document.querySelector('.out-2');
function t2() {
    let elem2 = "";
    for(let i = 1; i < 4; i++){
        elem2 += `${i}${'<br>'}`;
        for(let k = 0; k < 3; k++){
            elem2 += "*_";
        }
        elem2 += '<br>'
    }
    out2.innerHTML = elem2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
let out3 = document.querySelector('.out-3');
function t3() {
    let elem3 = "";
    for(let i = 0; i < 4; i++){
        for(let k = 0; k < 3; k++){
            elem3 += "*_";
        }
        elem3 += '<br>';
    }
    out3.innerHTML = elem3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
let out4 = document.querySelector('.out-4');
function t4() {
    let elem4 = "";
    for(let i = 1; i < 4; i++){
        elem4 += `${i}${"_"}`; 
        for(let k = 1; k < 6; k++){
            elem4 += `${k} `;
        }
        
    }
    out4.innerHTML = elem4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
let out5 = document.querySelector('.out-5');
function t5() {
    let elem5 = "";
    for(let i = 0; i < 3; i++){
        for(let k = 0; k < 6; k++){
            if(k % 2 === 0){
                elem5 += 1;
            }else{
                elem5 += 0;
            }
        }
        elem5 += "<br>"
    }
    out5.innerHTML = elem5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
let out6 = document.querySelector('.out-6');
function t6() {
    let elem6 = "";
    for(let i = 0; i < 3; i++){
        for(let k = 0; k < 6; k++){
            if(k === 0 || k === 4){
                elem6 += 1;
            }else if(k === 1 || k === 3){
                elem6 += 0;
            }else{
                elem6 += 'x';
            }
        }
        elem6 += "<br>";
    }
    out6.innerHTML = elem6
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
let out7 = document.querySelector('.out-7');
function t7() {
    let elem7 = "";
    for(let i = 0; i < 5; i++){
        for(let k = 0; k < i; k++){
            elem7 += "*";
        }
        elem7 += "<br>";
    }
    out7.innerHTML = elem7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
let out8 = document.querySelector('.out-8');
function t8() {
    let elem8 = "";
    for(let i = 0; i < 6; i++){
        for(let k = 5; k > i; k--){
            elem8 += "*";
        }
        elem8 += "<br>";
    }
    out8.innerHTML = elem8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
let out9 = document.querySelector('.out-9');
function t9() {
    let elem9 = "";
    for(let i = 1; i < 7; i++){
        for(let k = 1; k < i; k++){
            elem9 += `${k} `;
        }
        elem9 += "<br>";
    }
    out9.innerHTML = elem9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
let out10 = document.querySelector(".out-10");
function t10() {
    let elem10 ='';
    for(let i = 0; i < 5; i++){
        for(let k = 1; k < 11; k++){
            
            if(i == 0 && k < 10){
                elem10 += `${'0'}${k} `;
                
            }else{
                elem10 += (i*10) + k + " ";
            }
            
        }
        elem10 += "<br>";
    }
    out10.innerHTML = elem10;
}

document.querySelector('.b-10').onclick = t10;