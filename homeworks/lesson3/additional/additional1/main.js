// // --створити масив з:
// // - з 5 числових значень
// let numArr = [100, 500, -222, 3.14, 10];
// console.log(numArr);
//
// // - з 5 стічкових значень
// let strArr = ['hello', 'okten', 'school', 'owu', 'cool'];
// console.log(strArr);
//
// // - з 5 значень стрічкового, числового та булевого типу
// let array = [1, 2, 'one', 'two', true, false];
// console.log(array);
//
// // - та вивести його в консоль

// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = 'hello';
// arr[1] = 'okten';
// arr[2] = 100;
// arr[3] = 500;
// arr[4] = true;
//
// console.log(arr);

// - є масив
// let array = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }

// let i = array.length - 1;
// while (i >= 0) {
//     console.log(array[i]);
//     i--;
// }

// 2. перебрати його циклом for
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < array.length) {
//     if (i % 2 !== 0 && i !== 0) {
//     console.log(array[i]);
//     }
//     i++;
// }

// let i = array.length - 1;
// while (i >= 0) {
//     if (i % 2 !== 0 && i !== 0) {
//     console.log(array[i]);
//     }
//     i--;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < array.length; i++) {
//     if (i % 2 !== 0 && i !== 0) {
//         console.log(array[i]);
//     }
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     if (i % 2 !== 0 && i !== 0) {
//         console.log(array[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < array.length) {
//     if (i % 2 === 0 && i !== 0) {
//         console.log(array[i]);
//     }
//     i++;
// }

// let i = array.length - 1;
// while (i >= 0) {
//     if (i % 2 === 0 && i !== 0) {
//         console.log(array[i]);
//     }
//     i--;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0 && i !== 0) {
//         console.log(array[i]);
//     }
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     if (i % 2 === 0 && i !== 0) {
//         console.log(array[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten';
//     }
// }
// console.log(array);

// 8. вивести масив в зворотньому порядку.
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// for (let i = 0; i < 9; i++) {
//     array[i] = Math.floor(Math.random() * 100);
//     array.push(array[i]);
// }
//     console.log(array);

// let numArr = [100, 500, 123, -987, 0, 45, 64, 1, 9, 77];
// for (const number of numArr) {
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strArr = ['hello', 'okten', 'school', 'owu', 'cool', 'win', 'table', 'door', 'floor', 'laptop'];
// for (const string of strArr) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = [1, 2, 3, 'one', 'two', 'three', true, false, 0, -100];
// for (const arrayElement of array) {
//     console.log(arrayElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [1, 2, 3, 'one', 'two', 'three', true, false, 0, -100];
// for (const arrayElement of array) {
//     if (typeof arrayElement === "boolean")  {
//     console.log(arrayElement);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = [1, 2, 3, 'one', 'two', 'three', true, false, 0, -100];
// for (const arrayElement of array) {
//     if (typeof  arrayElement === "number") {
//         console.log(arrayElement);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = [1, 2, 3, 'one', 'two', 'three', true, false, 0, -100];
// for (const arrayElement of array) {
//     if (typeof arrayElement === "string") {
//         console.log(arrayElement);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
//
// array[0] = 1;
// array[1] = 2;
// array[2] = 3;
// array[3] = true;
// array[4] = false;
// array[5] = 'one';
// array[6] = 'two';
// array[7] = 'three';
// array[8] = 0;
// array[9] = -100;

// console.log(array);
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 11; i++) {
//     console.log(i);
//     document.write(`<h4>${i}</h4>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 101; i++) {
//     console.log(i);
//     document.write(`<h4>${i}</h4>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 101; i += 2) {
//     console.log(i);
//     document.write(`<h4>${i}</h4>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i < 101; i++) {
//     if (i % 2 === 0) {
//     console.log(i);
//     document.write(`<h4>${i}</h4>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 101; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(`<h4>${i}</h4>`);
//     }
// }


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: 'Harry Potter',
        pageCount: 456,
        genre: ['fantasy', 'drama'],
        authors: [
            {
                name: 'J.K. Rowling',
                age: 70
            }
        ]
    },
    {
    title: 'Snow White',
    pageCount: 220,
    genre: ['fantasy'],
    authors: [
        {
            name: 'kokos',
            age: 42
        }
    ]
},
    {
    title: 'Puss in Boots',
    pageCount: 185,
    genre: ['fantasy', 'comedy'],
    authors: [
        {
            name: 'vasya pupkin',
            age: 31
        },
        {
            name: 'olia',
            age: 19
        }
    ]
}
];

// -знайти наібльшу книжку.
// let pages = [];
// for (const book of books) {
//      pages.push(book.pageCount);
// }
// let max = Math.max(...pages);
// console.log(max);

// let max = books[0];
// for (let i = 0; i < books.length; i++) {
//     if (max < books[i]) {
//         max = books[i];
//     }
// }
//     console.log(max);

// - знайти книжку/ки з найбільшою кількістю жанрів
// let max = books[0];
// for (let i = 0; i < books.length; i++) {
//     if (max < books[i].genre) {
//         max = books[i];
//     }
// }
// console.log(max);

// - знайти книжку/ки з найдовшою назвою
// let max = books[0].title.length;
// for (let i = 0; i < books.length; i++) {
//     if (max < books[i].title.length) {
//         max = books[i];
//     }
// }
// console.log(max);

// - знайти книжку/ки які писали 2 автори
// for (const book of books) {
//     if (book.authors.length === 2) {
//         console.log(book);
//     }
// }

// - знайти книжку/ки які писав 1 автор
// for (const book of books) {
//     if (book.authors.length === 1) {
//         console.log(book);
//     }
// }