// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
console.log(hello);

let owu = 'owu';
console.log(owu);

let com = 'com';
console.log(com);

let ua = 'ua';
console.log(ua);

let num1 = 1;
console.log(num1);

let num2 = 10;
console.log(num2);

let num3 = -999;
console.log(num3);

let num4 = 123
console.log(num4);

const PI = 3.14;
console.log(PI);

let num5 = 2.7;
console.log(num5);

let num6 = 16;
console.log(num6);

let boolT = true;
console.log(boolT);

let boolF = false;
console.log(boolF);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Anastasiia';
let middleName = 'Stepanivna';
let lastName = 'Kulynych';

let person = lastName + ' ' + firstName + ' ' + middleName;
console.log(person);

person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
console.log(typeof  a);

let b = '100';
console.log(typeof  b);

let c = true;
console.log(typeof  c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('Enter your name ...');
let mdlName = prompt('Enter your middle name ...');
let age = +prompt('Enter your age ...');

let res = `Name: ${name}, Middle name: ${mdlName}, Age: ${age}`;
console.log(res);