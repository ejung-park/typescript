"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "ejung",
    age: 34,
    gender: "female"
};
const sayHi = (person) => {
    return (`Hello ${person.name} you are ${person.age}, you are a ${person.gender}`);
};
var sayHiPrint = sayHi(person);
console.log(sayHiPrint);
//# sourceMappingURL=index.js.map