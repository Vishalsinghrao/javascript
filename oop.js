const user = {
    username: 'vishal',
    email: 'vishal@gmail.com',
    password: '123456',

    getuserdetails: function(){
        console.log('i am the function in user');
    }
}

// console.log(user.username);
// console.log(user.getuserdetails());


function userone(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;

    // return this;
}

const userOne = new userone('vishal' , 'pokemon' , '123')

console.log(userOne);