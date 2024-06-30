// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsidetemp = null;
let useremail;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);

const bigNumber = 45746572783728748n
// Refrence (Non primitive)

// Array, objects, Functions

const heros = ["Thor", "IronMan", "batman"]

let myObj = {
    name:"Jatin",
    age:19,
}
const myFunction = function(){
    console.log("Hello bhai kya haal hai");
}
myFunction();


