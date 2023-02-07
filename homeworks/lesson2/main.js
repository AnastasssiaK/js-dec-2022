// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль#
// let array = [1,2,3,4,'one','two','three','four', true, false];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);
// console.log(array[7]);
// console.log(array[8]);
// console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title: 'Harry Potter',
//     pageCount: 456,
//     genre: ['fantasy', 'drama']
// }
// let book2 = {
//     title: 'Snow White',
//     pageCount: 220,
//     genre: ['fantasy']
// }
// let book3 = {
//     title: 'Puss in Boots',
//     pageCount: 185,
//     genre: ['fantasy', 'comedy']
// }
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let book1 = {
//     title: 'Harry Potter',
//     pageCount: 456,
//     genre: ['fantasy', 'drama'],
//     authors: [
//         {
//             name: 'J.K. Rowling',
//             age: 70
//         }
//     ]
// }
// let book2 = {
//     title: 'Snow White',
//     pageCount: 220,
//     genre: ['fantasy'],
//     authors: [
//         {
//             name: 'kokos',
//             age: 42
//         }
//     ]
// }
// let book3 = {
//     title: 'Puss in Boots',
//     pageCount: 185,
//     genre: ['fantasy', 'comedy'],
//     authors: [
//         {
//             name: 'vasya pupkin',
//             age: 31
//         },
//         {
//             name: 'olia',
//             age: 19
//         }
//     ]
// }

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users = [
//     {name: 'vasia', username: 'sunshine', password: 'asdqwe'},
//     {name: 'ania', username: 'flower', password: '1fff1'},
//     {name: 'petia', username: 'table', password: 'pro222'},
//     {name: 'yulia', username: 'cat', password: 'kitty'},
//     {name: 'oleh', username: 'programmer', password: 'ghj678'},
//     {name: 'ivan', username: 'kokos', password: '777'},
//     {name: 'ira', username: 'girl', password: 'bhykmo'},
//     {name: 'vicka', username: 'black', password: '67gv54'},
//     {name: 'misha', username: 'winner', password: 'iobgg'},
//     {name: 'orest', username: 'police', password: 'vbnrty567'}
// ];
//
// console.log(users[0]['password']);
// console.log(users[1]['password']);
// console.log(users[2]['password']);
// console.log(users[3]['password']);
// console.log(users[4]['password']);
// console.log(users[5]['password']);
// console.log(users[6]['password']);
// console.log(users[7]['password']);
// console.log(users[8]['password']);
// console.log(users[9]['password']);

// Логічні розгалуження:

//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 100500;
//
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 52;
//
// if (time > 0 && time <= 15) {
//     console.log('1 quarter');
//     } else if (time > 15 && time <= 30) {
//     console.log('2 quarter');
// } else if (time > 30 && time <= 45) {
//     console.log('3 quarter');
// } else if (time > 45 && time <= 60) {
//     console.log('4 quarter');
// }  else {
//     console.log('?????');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 15;
//
// if (day > 0 && day <=10) {
//     console.log('1 decade');
// } else if (day > 10 && day <= 20) {
//     console.log('2 decade');
// } else if (day > 20 && day <= 31) {
//     console.log('3 decade');
// } else {
//     console.log('?????');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = +prompt('Ender day (number)');
//
// switch (day) {
//     case 1:
//         document.write('<h1>Monday</h1>');
//         break;
//     case 2:
//         document.write('<h1>Tuesday</h1>');
//         break;
//     case 3:
//         document.write('<h1>Wednesday</h1>');
//         break;
//     case 4:
//         document.write('<h1>Thursday</h1>');
//         break;
//     case 5:
//         document.write('<h1>Friday</h1>');
//         break;
//     case 6:
//         document.write('<h1>Saturday</h1>');
//         break;
//     case 7:
//         document.write('<h1>Sunday</h1>');
//         break;
//     default:
//         document.write('<h1>?????</h1>');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let num1 = +prompt('Enter first number...');
// let num2 = +prompt('Enter second number...');
//
// if (num1 > num2) {
//     console.log(`${num1} is greater`);
// } else if (num1 < num2) {
//     console.log(`${num2} is greater`);
// } else if (num1 === num2) {
//     console.log('Numbers are equal');
// } else {
//     console.log('?????');
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x = '';
// let res = x || 'hello';
// console.log(res);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super');
}