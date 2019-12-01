"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const ejung = new Human("Ejung", 34, "Female");
const sayHi = (person) => {
    return (`Hello ${person.name} you are ${person.age}, you are a ${person.gender}`);
};
var sayHiPrint = sayHi(ejung);
console.log(sayHiPrint);
//# sourceMappingURL=index.js.map