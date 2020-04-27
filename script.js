// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let drivers = {name: "Misha", age: 35};
//
// class Car {
//     constructor(model, producer, year, maxSped, volumeMotor) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSped = maxSped;
//         this.volumeMotor = volumeMotor;
//     }
//
//     driver() {
//         console.log(`їдемо зі швидкістю ${this.maxSped} на годину`)
//     }
//
//     info() {
//         console.log(`
//         model: ${this.model}
//         producer :${this.producer}
//         year :${this.year}
//         maxSped:${this.maxSped}
//         volumeMotor:${this.volumeMotor} `)
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         console.log(this.maxSped += newSpeed);
//     }
//
//     changeYear(newValue) {
//         console.log(this.year = newValue);
//     }
//
//     addDriver(driver) {
//         console.log(this.shafer = driver);
//     }
// }
//
// let car = new Car(
//     "'X3",
//     'BMW',
//     '2020',
//     '200',
//     '3000')
//
// car.driver()
// car.info()
// car.increaseMaxSpeed(100)
// car.changeYear(2021)
// car.addDriver(drivers)

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
class Human {
    constructor(name, age) {
        this.name = name || "No name";
        this.age = age || "No age";
    }
}

class Cinderella extends Human {
    constructor(name, age, footSize) {
        super(name, age)
        this.fotSize = footSize || 'No fotSize'

    }
}

class Prince extends Human {
    constructor(name, age, shoeSize) {
        super(name, age)
        this.shoeSize = shoeSize || 'No shoeSize'

    }

    findCinderell(array) {
        let find = null;
        find = array.find(value=> value.footSize === this.shoeSize)
        // for (const item of array) {
        //     if (item.footSize === this.shoeSize) {
        //         find = item;
        //     }
        // }
        // find
        //     ? console.log("My Sinderella name is" + find.name)
        //     : console.log("I not find my Cinderella")
    }
}


let cinderella1 = new Cinderella("Ana", 18, 38)
let cinderella2 = new Cinderella("Alona", 17, 39)
let cinderella3 = new Cinderella("Mariya", 19, 40)
let cinderella4 = new Cinderella("Lena", 28, 35)
let cinderella5 = new Cinderella("Ruslana", 18, 38)
let cinderella6 = new Cinderella("Oksana", 24, 42)
let cinderella7 = new Cinderella("Ira", 28, 44)
let cinderella8 = new Cinderella("Natalia", 26, 43)
let cinderella9 = new Cinderella("Yulia", 22, 45)
let cinderella10 = new Cinderella("Ivanka", 40, 47)

let arrayCinderells = [cinderella1, cinderella2, cinderella3, cinderella4,
    cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10]

const prince1 = new Prince('Albert', 25, 35)

prince1.findCinderell(arrayCinderells)
//
//
// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================