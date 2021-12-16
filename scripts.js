// let a = [1,2,3],
//     b = [];

//     b = [...a];

//     console.log(b);

//     b.push(4);

//     console.log(`массив b ${b}`);
//     console.log(`массив a ${a}`);


// пирамидка

// let height = 5;

// for (let i = 1; i <= height; i++){
//     for (let k = 1; k<= height-i;k++){
//         document.write('&ensp;')
//     }
//     for (let j = 1; j <= i*2-1; j++){
//         document.write('^')
//     }   document.write('<br />') 
// }

// function hello(user) {
//     console.log('Привет! ' + user);
// }


// var hello = function (user) {
//     console.log('Привет, ' + user);
// };

// hello('Ольга');


// homework 5 js

// 1 Сделайте функцию, которая отнимает от первого числа второе и делит на
//   третье. Числа передаются параметром.


// function firstMinusSecondAndDevideByThird(a, b, c) {
//    let result = (a+b)/c;
//    console.log(result);
// }

// firstMinusSecondAndDevideByThird(15, 5, 4);


// 2 Сделайте функцию, которая возвращает куб числа и его квадрат. Число
//   передается параметром.


// function degree3And2(a) {
//     let degree3 = a*a*a;
//     let degree2 = a*a;
//     console.log(`куб числа ${a} равен ${degree3}`)
//     console.log(`квадрат числа ${a} равен ${degree2}`)
// }

// degree3And2(5);


// 3 Напишите функции min и max, которые возвращают меньшее и большее из
//   чисел a и b.


// function minOfTwoNumbers(a, b) {
//     if (a > b) {
//         console.log('меньше число ' + b)
//     } else {
//         console.log('меньше число ' + a)
//     }
// }

// function maxOfTwoNumbers(a, b) {
//     if (a < b) {
//         console.log('больше число ' + b)
//     } else {
//         console.log(' больше число ' + a)
//     }
// }

// minOfTwoNumbers(13, 25);
// maxOfTwoNumbers(13, 25);


// 4 Напишите две функции: первая ф-ция должна возвращать массив с
//   числовыми значениями, диапазон которых должен вводиться пользователем
//   с клавиатуры; вторая – выводить полученный массив.


//     let a = prompt('со скольки?');
//     let b = prompt('до скольки?');  

// function createArray() {
    
//     let array = [];
//     for(let i = +a; i <= +b; i++)  // если тут не ставил + перед a и b то в массиве первое значение выводилось строкой
//     array.push(i);
//     console.log(array);
// }

// function showArray() {
//     createArray();
// }

// showArray();



// 5 Сделайте функцию isEven() (even - это четный), которая параметром
//   принимает целое число и проверяет: четное оно или нет. Если четное - пусть
//   функция возвращает true, если нечетное — false.


// function isEven(a) {
// alert(a % 2 == 0);
// }

// isEven(14);


// 6 Напишите ф-цию, в которую передается массив с целыми числами.
//   Верните новый массив, где останутся лежать только четные из этих чисел.
//   Для этого используйте вспомогательную функцию isEven из предыдущей
//   задачи.


// let a = prompt('со скольки?');
// let b = prompt('до скольки?');  

// function createArray() {
//     let array = [];
//     for(let i = +a; i <= +b; i++)  // если тут не ставил + перед a и b то в массиве первое значение выводилось строкой
//     array.push(i);
//     console.log(array);
// }

// function isEven(i) {
//    return (i % 2 == 0);
// }
  
// function createEvenArray() {
//     let EvenArray = [];
//     createArray();
//     for(let j = +a; j <= +b; j++)
//     if (isEven(j) == true){
//     EvenArray.push(j)
//     }
//     console.log(EvenArray);
// }

// createEvenArray();


    