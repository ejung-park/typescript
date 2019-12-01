const sayHi = (name:string, age:number, gender:string):string => {
    return(`Hello ${name} you are ${age}, you are a ${gender}`);
}

var sayHiPrint = sayHi("ejung", 34, "female");
console.log(sayHiPrint);
export {};