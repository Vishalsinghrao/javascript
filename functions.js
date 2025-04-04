
function sayMyName(){
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
}

// sayMyName()
// console.log(sayMyName());

// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(4,3)

function addTwoNumbers(num1 , num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

let result = addTwoNumbers(3,5)

// console.log(result);

function userLoginMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(userLoginMessage("vishal"));
// console.log(userLoginMessage());

function CalculateCartPrice(val1 , val2 , ...num1){
    return num1
}

// console.log(CalculateCartPrice(200,400,500,2000));

const user = {
    username: "vishal",
    price: 199
}

function HandleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// HandleObject(user)
HandleObject({
    username: "sam",
    price: 399
})

const mynewarray = [200,300,400,500]

function returnsecondvalue(getArray){
    return getArray[1]
}

// console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,300,400,500]));
