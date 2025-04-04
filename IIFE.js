// immediately invoked function expression (IIFE)


// global scope ke pollution se bachne ke liye use kiya jata h
(function chai(){
    console.log("DB Connected");
})()

( (name) => {
    console.log(`my name is ${name}`);
})('vishal');