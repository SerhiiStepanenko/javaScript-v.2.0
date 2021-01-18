
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */
let a1 = document.querySelector('.div-1');
function t1() {
    document.querySelector('.out-1').innerHTML = a.textContent;
    return a.textContent;
}

a1.onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(e) {
let a2 = document.querySelector('.out-2');
    if(e.altKey){
        a2.innerHTML = true;
        return true;
    }else{
        a2.innerHTML = false;
        return false;
    }
}

document.querySelector('.div-2').onclick = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;
let a3 = document.querySelector('.div-3');
function t3() {
    a3.style.width = w3 + 'px';
    w3 += 5;
    document.querySelector('.out-3').innerHTML = w3 + ' px';
}

a3.onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */
let a4 = document.querySelector('.div-4');
function t4() {
    document.querySelector('.out-4').innerHTML = a4.textContent;
    return a4.textContent;
}

a4.ondblclick = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */
let a5 = document.querySelector('.div-5');
function t5() {
    a5.classList.toggle('active');
}

a5.ondblclick = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
    document.querySelector('.ul-6').classList.toggle('hide');
}

document.querySelector('.div-6').ondblclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */
let a7 = document.querySelector('.div-7');
function t7() {
    a7.classList.toggle('active');
}

a7.oncontextmenu = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */
let a8 = document.querySelector('.ch-8');
function t8() {
    let contextMenu = document.querySelector('body');
    if(a8.checked){
        contextMenu.oncontextmenu = () =>{
            return true;
        }
    }else{
        contextMenu.oncontextmenu = () =>{
            return false;
        }
    }
}

a8.onchange = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
    document.querySelector('img').src = 'img/2.png';
}

document.querySelector('.div-9').oncontextmenu =t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
    document.querySelector('div.div-10 img').src = 'img/2.png';
}

document.querySelector('.div-10').onmouseenter = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
let a11 = document.querySelector('.div-11');
function t11() {
    document.querySelector('div.div-11 img').src = 'img/2.png'
}
function t11a() {
    document.querySelector('div.div-11 img').src = 'img/1.png'
}
a11.onmouseenter = t11;
a11.onmouseleave = t11a;
// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

document.querySelector('.div-12').onmousedown = () => {
    document.querySelector('.div-12').classList.add('active');
}

// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

document.querySelector('.div-13').onmousedown = () =>  {
    document.querySelector('.div-13').classList.add('active');
}

document.querySelector('.div-13').onmouseup = () =>  {
    document.querySelector('.div-13').classList.remove('active');
}
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
    document.querySelector('.div-14').classList.add('active');
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let move = 1;
function t15() {
    document.querySelector('.div-15').innerHTML = move;
    move++;
}
document.querySelector('.div-15').onmousemove = t15
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let w16 = 75;
let a16 = document.querySelector('.div-16');
function t16() {
    a16.style.width = w16 + "px";
    w16++; 
}
// document.querySelector('.div-16').onmousemove = t16;
a16.addEventListener('mousemove', t16);
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    a16.addEventListener('mousemove', t16);
}
function t17Off() {
    a16.removeEventListener('mousemove', t16);
}
document.querySelector(".b-17_on").onclick = t17On;
document.querySelector(".b-17_off").onclick = t17Off;
// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
let a18 = document.querySelector('.div-18');
function t18() {
    a18.innerHTML = a18.offsetWidth + "px";
}
document.querySelector('.div-18').onmouseenter = t18;
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
let a19 = document.querySelector('.div-19');
function t19() {
    a19.innerHTML = a19.className;
}
document.querySelector('.div-19').onmouseout = t19;
// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
let value = 10;
function t20() {
    value++;
    document.querySelector('progress').value = value;
}
document.querySelector('progress').onmousemove = t20;
// ваше событие здесь!!!