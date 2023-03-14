// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];

users.push(new User(1, 'vasia', 'pupkin', 'pupkin@gmail.com', +380987767890));
users.push(new User(2, 'kolia', 'koks', 'koks@gmail.com', +380967367890));
users.push(new User(3, 'ania', 'kitten', 'kitten@gmail.com', +380643767890));
users.push(new User(4, 'olia', 'smile', 'smile@gmail.com', +380987789647));
users.push(new User(5, 'max', 'vovk', 'vovk@gmail.com', +380978965231));
users.push(new User(6, 'inna', 'flowers', 'flowers@gmail.com', +380935678123));
users.push(new User(7, 'orest', 'orel', 'orel@gmail.com', +3806567890123));
users.push(new User(8, 'oleh', 'dog', 'dog@gmail.com', +380971289647));
users.push(new User(9, 'nastiia', 'sunshine', 'sunshine@gmail.com', +380912356789));
users.push(new User(10, 'ira', 'sky', 'sky@gmail.com', +380978965671));

console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        // this.id = id;
        // this.name = name;
        // this.surname = surname;
        // this.email = email;
        // this.phone = phone;

        User.call(this, id, name, surname, email, phone);
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];

clients.push(new Client(1, 'vasia', 'pupkin', 'pupkin@gmail.com', +380987767890, ['apple', 'milk', 'juice']));
clients.push(new Client(2, 'kolia', 'koks', 'koks@gmail.com', +380967367890, ['coffee', 'tea']));
clients.push(new Client(3, 'ania', 'kitten', 'kitten@gmail.com', +380643767890, ['cakes', 'chocolate']));
clients.push(new Client(4, 'olia', 'smile', 'smile@gmail.com', +380987789647, ['bread', 'butter', 'sausage']));
clients.push(new Client(5, 'max', 'vovk', 'vovk@gmail.com', +380978965231, ['coca-cola', 'fanta', 'sprite']));
clients.push(new Client(6, 'inna', 'flowers', 'flowers@gmail.com', +380935678123, ['eggs', 'milk']));
clients.push(new Client(7, 'orest', 'orel', 'orel@gmail.com', +3806567890123, ['banana', 'lemon']));
clients.push(new Client(8, 'oleh', 'dog', 'dog@gmail.com', +380971289647, ['rice', 'pasta']));
clients.push(new Client(9, 'nastiia', 'sunshine', 'sunshine@gmail.com', +380912356789, ['phone']));
clients.push(new Client(10, 'ira', 'sky', 'sky@gmail.com', +380978965671, ['TV', 'lustre', 'mirror']));

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, manufacture, year, maxSpeed, volume) {
//     this.model = model;
//     this.manufacture = manufacture;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drivers = [];
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину.`);
//     };
//
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//             console.log(`${key} - ${this[key]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину.`);
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(`Рік випуску - ${this.year}.`);
//     }
//
//     this.addDriver = function (name, age, experience) {
//         this.drivers.push(new Driver(name, age, experience));
//     }
//     function Driver(name, age, experience) {
//     this.name = name;
//     this.age = age;
//     this.experience = experience;
// }
// }
//
// let audi = new Car('audi', 'Germany','2022',356, '4.0');
// console.log(audi);
// audi.drive();
// audi.info();
// audi.increaseMaxSpeed(200);
// audi.changeYear(2020);
// audi.addDriver('Anastasiia',20,1);
// console.log(audi.drivers);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, manufacture, year, maxSpeed, volume) {
        this.model = model;
        this.manufacture = manufacture;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину.`);
    };

    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину.`);
    }

    changeYear(newValue) {
        this.year = newValue;
        console.log(`Рік випуску - ${this.year}.`);
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let bmw = new Car('bmw', 'Germany', '2020', 320, '5.0');
bmw.drive();
bmw.info();
bmw.increaseMaxSpeed(100);
bmw.changeYear(2021);
bmw.addDriver('Anastasiia');
console.log(bmw);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Popeliushka(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let popeliushky = [];
popeliushky.push(new Popeliushka('Cinderella', '19', 33));
popeliushky.push(new Popeliushka('Ariel', '16', 39));
popeliushky.push(new Popeliushka('Tiana', '21', 39));
popeliushky.push(new Popeliushka('Mulan', '18', 38));
popeliushky.push(new Popeliushka('Bell', '20', 35));
popeliushky.push(new Popeliushka('Pokahontas', '22', 38));
popeliushky.push(new Popeliushka('Bilosnizhka', '24', 37));
popeliushky.push(new Popeliushka('Jasmin', '23', 37));
popeliushky.push(new Popeliushka('Anna', '15', 34));
popeliushky.push(new Popeliushka('Elza', '17', 38));

console.log(popeliushky);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(age, name, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let prince = new Prince(24, 'Max', 34);
console.log(prince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const princess of popeliushky) {
    if (princess.footSize === prince.footSize) {
        console.log(`${princess.name} повинна бути з принцом.`);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function findPopeliushka (array) {
    return array.find(popeliushka => prince.footSize === popeliushka.footSize)
}

console.log(findPopeliushka(popeliushky));