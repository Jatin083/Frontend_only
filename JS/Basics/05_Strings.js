const name = "Jatin"
const repoCount = 50

// console.log(name + repoCount + "Value");   // wrong way

console.log(`Hello mu name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Jatinsingh')

console.log(gameName.__proto__);//{}
console.log(gameName.length);//10
console.log(gameName.toUpperCase());//JATINSINGH
console.log(gameName.charAt(2));//t
console.log(gameName.indexOf('t'));//2

const newString = gameName.substring(0,4)
console.log(newString);//Jati

const anotherString = gameName.slice(-8,4)
console.log(anotherString);//ti

const newStringOne = "          Jatin         "
console.log(newStringOne);
console.log(newStringOne.trim());
