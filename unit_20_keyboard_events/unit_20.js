
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/
let i1 = document.querySelector('.i-1');
function t1() {
    document.querySelector('.out-1').textContent = i1.value;
}
i1.onkeyup = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
    document.querySelector('.out-2').innerHTML = event.keyCode;
    console.log(event);
}
document.querySelector('.i-2').onkeydown = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;
let out3 = document.querySelector('.out-3');
function t3(event) {
    if(event.keyCode >= 65 && event.keyCode <= 90){
        out3.innerHTML = true;
    }else if(event.keyCode >= 48 && event.keyCode <= 57){
        out3.innerHTML = false;
    }else{
        out3.innerHTML = event.key;
    }
}
document.querySelector('.i-3').onkeydown = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */
let out4 = document.querySelector('.out-4');
function t4(event) {
    let out = "";
    if(event.keyCode < 65 || event.keyCode > 90){
        out4.innerHTML += out + event.key;
    }
}
document.querySelector('.i-4').onkeypress = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */
let out6 = document.querySelector('.out-5');
function t5(event) {
    let out = '';
    out += event.key
    out6.innerHTML += out.toUpperCase();
}
document.querySelector('.i-5').onkeypress = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(event) {
    let out = '';
    if(event.keyCode >= 97){
        out += event.key;
    }
    document.querySelector('.i-6').value = out;
    return false;
}
document.querySelector('.i-6').onkeypress = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = ['a', 'b', 'c', 'd', 'e', 'f'];
    let out = a7[Math.floor(Math.random()*a7.length)];
    document.querySelector('.out-7').innerHTML += out;
}
document.querySelector('.i-7').onkeypress = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let a8 = "";
function t8(event) {
    if(event.keyCode == 105){
        a8 += 1; 
    }else if(event.keyCode == 111){
        a8 += 0;
    }else if(event.keyCode == 108){
        a8 += 7;
    }else{
        a8 += event.key;
    }
    document.querySelector('.out-8').innerHTML = a8;
    
}
document.querySelector('.i-8').onkeypress = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let counter = 1;
function t9(event) {
    let out9 = document.querySelector('.out-9');
    if(event.keyCode == 40){
        out9.innerHTML = counter;
        counter++;
    }else{
        out9.innerHTML = event.key;
    }
}
document.querySelector('.i-9').onkeydown = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let w10 = 75;
let h10 = 75;
function t10(event) {
    let img = document.querySelector('div.div-10 img');
    if(event.keyCode == 37 || event.keyCode == 39){
        img.style.width = w10 + "px";
        w10++;
    }else if(event.keyCode == 38 || event.keyCode == 40){
        img.style.height = h10 + "px";
        h10++;
    }
}
document.querySelector('.i-10').onkeydown = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11(event) {
    let button = document.querySelectorAll('button');

    let l1 = document.querySelector('.l1');
    let l2 = document.querySelector('.l2');
    let l3 = document.querySelector('.l3');
    let l4 = document.querySelector('.l4');
    let l5 = document.querySelector('.l5');
    let l6 = document.querySelector('.l6');
    let l7 = document.querySelector('.l7');
    let l8 = document.querySelector('.l8');
    let l9 = document.querySelector('.l9');
    let l0 = document.querySelector('.l0');

    let q = document.querySelector('.q');
    let w = document.querySelector('.w');
    let e = document.querySelector('.e');
    let r = document.querySelector('.r');
    let t = document.querySelector('.t');
    let y = document.querySelector('.y');
    let u = document.querySelector('.u');
    let i = document.querySelector('.i');
    let o = document.querySelector('.o');
    let p = document.querySelector('.p');

    let shift = document.querySelector('.shift');
    let ctrl = document.querySelector('.ctrl');
    let alt = document.querySelector('.alt');
    let enter = document.querySelector('.enter');
    let space = document.querySelector('.space');

    for(let name of button){
        if(event.keyCode == 81){
            name.classList.remove('active');
    
            q.classList.add('active');
        }else if(event.keyCode == 87){
            name.classList.remove('active');
    
            w.classList.add('active');
        }else if(event.keyCode == 69){
            name.classList.remove('active');
    
            e.classList.add('active')
        }else if(event.keyCode == 82){
            name.classList.remove('active');
    
            r.classList.add('active');
        }else if(event.keyCode == 84){
            name.classList.remove('active');

            t.classList.add('active');
        }else if(event.keyCode == 89){
            name.classList.remove('active');

            y.classList.add('active');
        }else if(event.keyCode == 85){
            name.classList.remove('active');

            u.classList.add('active');
        }else if(event.keyCode == 73){
            name.classList.remove('active');

            i.classList.add('active');
        }else if(event.keyCode == 79){
            name.classList.remove('active');

            o.classList.add('active');
        }else if(event.keyCode == 80){
            name.classList.remove('active');

            p.classList.add('active');
        }else if(event.keyCode == 49){
            name.classList.remove('active');

            l1.classList.add('active');
        }else if(event.keyCode == 50){
            name.classList.remove('active');

            l2.classList.add('active');
        }else if(event.keyCode == 51){
            name.classList.remove('active');

            l3.classList.add('active');
        }else if(event.keyCode == 52){
            name.classList.remove('active');

            l4.classList.add('active');
        }else if(event.keyCode == 53){
            name.classList.remove('active');

            l5.classList.add('active');
        }else if(event.keyCode == 54){
            name.classList.remove('active');

            l6.classList.add('active');
        }else if(event.keyCode == 55){
            name.classList.remove('active');

            l7.classList.add('active');
        }else if(event.keyCode == 56){
            name.classList.remove('active');

            l8.classList.add('active');
        }else if(event.keyCode == 57){
            name.classList.remove('active');

            l9.classList.add('active');
        }else if(event.keyCode == 48){
            name.classList.remove('active');

            l0.classList.add('active');
        }else if(event.keyCode == 16){
            name.classList.remove('active');

            shift.classList.add('active');
        }else if(event.keyCode == 17){
            name.classList.remove('active');

            ctrl.classList.add('active');
        }else if(event.keyCode == 18){
            name.classList.remove('active');

            alt.classList.add('active');
        }else if(event.keyCode == 13){
            name.classList.remove('active');

            enter.classList.add('active');
        }else if(event.keyCode == 32){
            name.classList.remove('active');

            space.classList.add('active');
        }
    }

    console.log(event)
}
document.querySelector('.i-11').onkeydown = t11;
// ваше событие здесь!!!

