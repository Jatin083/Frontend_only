

function saymyname(){
    
    console.log("J");
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("N");

}

// saymyname();

// function addTwoNumbers(a,b){ //yha a,b parameters hai
//     console.log(a+b);
// }

function addTwoNumbers(a,b){ //yha a,b parameters hai
    
    // let result = a + b
    // return result 
    return a + b
}

const result = addTwoNumbers(3, 5) // yha ye arguments hai
// console.log("Result:", result);

function loginUsermessage(username = "Karan"){
    if(username === undefined){
        console.log("please enter username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUsermessage("Jatin"))
// console.log(loginUsermessage("Jatin"))


// cart
function calculateCartPrice(val1, val2, ...num1 ){
  return num1
}

// console.log(calculateCartPrice(200 , 400, 500, 2000))


const user ={
    username:"Jatin",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price : 399
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[3]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
