// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name ="Jatin"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firestname:"Jatin",
            lastname:"Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firestname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}


// const obje3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users= [
    {
        id:1,
        email:"j@gmail.com"
    },
    {
        id:1,
        email:"j@gmail.com"
    },
    {
        id:1,
        email:"j@gmail.com"
    }
]
console.log(users[1].email);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //array me covert hoga
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIb'));


// destructuring

const course = {
    Coursename: "100 day code",
    price:"999",
    courseInstructor:"Jatin"
}

// course.courseInstructor

const {courseInstructor:instructor} = course

// console.log(courseInstructor);
console.log(instructor);




