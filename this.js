const user = {
        username: "vishal",
        age:20,
        
        WelcomeMessage: function(){
            console.log(`${this.username} , welcome to the website`);
            console.log(this);
        }
}

// user.WelcomeMessage()
// user.username = "tokyo"
// user.WelcomeMessage()

// console.log(this);

// function chai(){
//     let username = "vishal"
//     console.log(this.username);

// }

// const chai = function (){
//     let username = "vishal"
//     console.log(this.username);

// }

// const chai = () => {
//     let username = "vishal"
//     console.log(this.username);

// }
// chai()

// const addTwo = (num1 ,num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) => ({username: "vishal"})



// console.log(addTwo(2,5));

