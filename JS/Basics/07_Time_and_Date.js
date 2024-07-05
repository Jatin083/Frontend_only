// Dates 
// let myDate = new Date();
// console.log(myDate.toString());//Tue Jul 02 2024 16:58:48 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Tue Jul 02 2024
// console.log(myDate.toLocaleString());//2/7/2024, 5:00:15 pm
// console.log(typeof myDate);//object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-15")
let myCreatedDate = new Date("02-07-2024")

// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})

console.log();
