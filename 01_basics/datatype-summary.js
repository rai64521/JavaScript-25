// primitive 

// 7 types : String, Number, Boolean, null, undefined, BigInt, Symbol

const name = "Sumant"
let age = 21
let isLoggedIn = true
let temp = null
let state;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 4562738746537289837463283734532456432456754n

console.table([name, age, isLoggedIn, temp, state, id, anotherId, bigNumber])
console.table([typeof name, typeof age, typeof isLoggedIn, typeof temp, typeof state, typeof id, typeof anotherId, typeof bigNumber])




// Reference (Non primitive)

// 4 types : Array, Object, Function, Map

const myArr = ["Sumant", "Shubhangi", "Rishu", "Tripti"]

const myObj = {
    name: "Sumant Rai",
    age: 21,
    email: "raisumant99@gmail.com",
    isLoggedIn: true
}

const myFun = function(){
    console.log("Hello, Sumant Rai")
}

console.table([typeof myArr, typeof myObj, typeof myFun]);
