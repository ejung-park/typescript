interface Human {
    name : string;
    age : number;
    gender : string;
}

const person = {
    name : "ejung",
    age : 34,
    gender : "female"
}

const sayHi = (person:Human):string => {
    return(`Hello ${person.name} you are ${person.age}, you are a ${person.gender}`);
}

var sayHiPrint = sayHi(person);
console.log(sayHiPrint);
export {};