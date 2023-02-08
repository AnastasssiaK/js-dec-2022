// 1. Створити пустий масив та :
// let array = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
// let num = 0;
// for (let i = 0; i < 50; i++) {
//     if (num % 2 === 0) {
//         array[i] = num;
//         num += 2;
//     }
// }
// console.log(array);

//     b. заповнити його 50 непарними числами за допомоги циклу.
// let num = 1;
// for (let i = 0; i < 50; i++) {
//     // let num = Math.floor(Math.random() * 100)
//     if (num % 2 !== 0) {
//         array[i] = num;
//         num += 2;
//     }
// }
// console.log(array);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.floor(Math.random() * 1000);
// }
// console.log(array);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.floor(Math.random() * (732 - 8) + 8);
// }
// console.log(array);

// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 2; i < array.length; i += 3 ) {
//     console.log(array[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 2; i < array.length; i += 3 ) {
//     if (array[i] % 2 === 0) {
//     console.log(array[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArr = [];
// for (let i = 2; i < array.length; i += 3 ) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//         newArr.push(array[i]);
//     }
// }
// console.log(newArr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// for (let i = 2; i < array.length; i += 3) {
//     if (array[i + 1] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let numbers = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(`Разом: ${sum}`);
// average = sum / numbers.length;
// console.log(`Середній чек = ${average.toFixed(2)}`);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array = [];
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.floor(Math.random() * (732 - 8) + 8);
// }
// console.log(array);
// let newArr = [];
// for (let i = 0; i < array.length; i++) {
//     newArr[i] = array[i] * 5;
// }
// console.log(newArr);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let newArr = [];
// let array = [1, 2, 3, 'one', 'two', 'three', true, false, 0, -100];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//         newArr.push(array[i]);
//     }
// }
// console.log(array);
// console.log(newArr);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

// let usersWithCities = [];
// for (let users of usersWithId) {
//     for (let cities of citiesWithId) {
//         if (users.id === cities.user_id) {
//             users.address = cities;
//             usersWithCities.push(users);
//         }
//     }
// }
// console.log(usersWithCities);


//  - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let numArr = [100, 500, 123, -987, 0, 45, 64, 1, 9, 77];
// for (const number of numArr) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let newArr = [];
// let numArr = [100, 500, 123, -987, 0, 45, 64, 1, 9, 77];
// for (const number of numArr) {
//     newArr.push(number);
// }
// console.log(newArr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let abc = [ 'a', 'b', 'c'];
// let res = '';
// for (let i = 0; i < abc.length; i++) {
//     res += abc[i];
//
// }
// console.log(res);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let abc = [ 'a', 'b', 'c'];
// let res = '';
// let i = 0;
// while (i < abc.length) {
//     res += abc[i];
//     i++;
// }
//
// console.log(res);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let abc = [ 'a', 'b', 'c'];
// let res = '';
// for (const string of abc) {
//     res += string;
// }
// console.log(res);