const name = "ejung",
    age = 34,
    gender = "female";

const sayHi = (name, age, gender) => { //gender? 로 처리하면 함수 호출 시 gender 파라미터값을 정의하지 않아도 정상 실행됨
    console.log(`Hello ${name} you are ${age}, you are a ${gender}`);
}

sayHi(name, age, gender);
export {};