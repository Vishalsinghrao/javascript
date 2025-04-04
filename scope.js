//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "vishal"
    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}

one()


if(true){
    const username = "vishal"
    if(true){
        const website = " youtube"
        console.log(username + website);
    }
    
    // console.log(website);

}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) // we can't intialize before the function here cause we are storing the function in another variable
const addTwo = function(num){
    return num + 2
}