// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["IronMan","SpiderMan"]

const myArr2 = new Array(1, 2, 3, 4 )

console.log(myArr[1]);

// Array methods

// myArr.push(6) //6 ko end me push kiya jayega 
// myArr.push(7) 
// myArr.pop() //last element ko remove kiya jayega

// myArr.unshift(9) //array ka first element banega
// myArr.shift() //array ka element jo unshift h remove kr dga

// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(3));//3

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr); // join() ne string me covert kiya 

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1); 
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2); 

// slice me first se lekr last second elemnt aayenge or array same hi rahega 
// splice me 1 se 3 tak ke element ko remove kiya jayega and array me change karega