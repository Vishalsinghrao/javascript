const PromiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('Async task is completed');  
        resolve()      
    }, 1000)
})

PromiseOne.then(function(){
    console.log('Promise consumed');
})

const PromiseTwo = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async task 2 is completed');
})

const PromiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : 'vishal', age : 20})
    }, 1000)
})

PromiseThree.then(function(user){
    console.log(user)
})

const PromiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : 'vishal', age : 20})
        } else{
            reject('Error')
        }
    }, 1000)
})

PromiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('The promise is either resolved or rejected');
})

const PromiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : 'rahul', age : 20})
        } else{
            reject('Error 404')
        }
    } , 1000)
})

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getallusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }

// getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})