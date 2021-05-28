'use strict'
var east = 1;
let west = 2;
{const north = 3;
    console.log (north);
};
// console.log (north);
// console.log (west);

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = [];

let arr = ['1','bek','17 cows'];
console.log(arr[2]);

let persone = {
    name: "Jsohn",
    secondName: "Smith",
    isMarried: false
};
console.log (persone.name);

console.log (persone["secondName"]);

// УРОК 2.3 Простое общение с пользователем

// alert("Привет!");
// let answer = confirm("Тебе больше 18?");
// console.log(answer);

// let question = prompt("Как дела?", "Ахуенна");
// console.log(typeof(question));

//  УРОК 2.4 Операторы в JS

console.log("arr" + "-object");

let sto = (2 + "+sto");
console.log(typeof(sto));

let stod = +(2 + "+sto");
console.log(typeof(stod));

let incr = 5,
    decr = 5;

//     incr++;
//     decr--;

// console.log(incr);
// console.log(decr);

// console.log(++incr); когда переменная уже измененна, то далее в коде она будет идти измененной
console.log(incr++);

console.log(8.98%2);

console.log("2" == 2);

console.log("2" === 2);

console.log(!("2" === 2));