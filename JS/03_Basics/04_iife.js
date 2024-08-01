// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // global scope se dikkat na ho isliye iife use hota hai 

// chai();

( (name) => {
        console.log(`DB CONNECTED TWO ${name}`);
})("Jatin")