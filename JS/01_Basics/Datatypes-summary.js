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

console.log(typeof outsidetemp);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */

// ****************************************************************
// Stack (Primitive), Heap (Non =primitive) 

let YTname = "Chai_or_Code"
let YTname2 = YTname
YTname2 = "Code_or_Chaif"

console.log(YTname);
console.log(YTname2);

let userOne ={
    email: "user@gmail.com",
    upione:"hdsg@ybl"
}
let userTwo = userOne

userTwo.email = "jatinsingh32063@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

