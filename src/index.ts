class Human {
    public name: string;
    public age: number;
    public gender:string;
    constructor (name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender=gender;
    }
}

const ejung = new Human("Ejung", 34, "Female");

const sayHi = (person:Human):string => {
    return(`Hello ${person.name} you are ${person.age}, you are a ${person.gender}`);
}

var sayHiPrint = sayHi(ejung);
console.log(sayHiPrint);
export {};