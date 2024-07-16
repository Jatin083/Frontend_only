
// Object.create // contructor method

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name :"Jatin",
    "full Name" : "Jatin Singh",
    [mySym]:"mykey1",
    age: 19,
    location: "Delhi",
    email: "jatin@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]

}


console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);
console.log(JsUser[mySym]);

JsUser.email = "jatin@Gpt.com"
// Object.freeze(JsUser)
JsUser.email = "jatin@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("heloo bhaiyo");
}
JsUser.greetingTwo = function(){
    console.log(`heloo bhaiyo , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






