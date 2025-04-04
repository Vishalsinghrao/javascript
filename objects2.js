// singleton object

// const instauser = new Object()
const instauser = {}

instauser.id = "123abc"
instauser.name = "vishal"
instauser.isloggedin = false

// console.log(instauser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "vishal",
            lastname: "singh rao"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {5: "a" , 6: "b"}

// const obj4 = {obj1 , obj2}
// const obj4 = Object.assign({}, obj1 , obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "some@gmail.com"
    }
]

users[1].email

// console.log(instauser);

// console.log(Object.keys(instauser));
// console.log(Object.values(instauser));
// console.log(Object.entries(instauser));

// console.log(instauser.hasOwnProperty('isloggedin'));

// de structure of an object

const course = {
    coursename : "devops",
    price: 7000,
    courseinstructor: "vishal"
}

// course.courseinstructor

const {courseinstructor : instructor} = course

// console.log(courseinstructor);
console.log(instructor);

// JSON 
// {
//     "coursename" : "devops",
//     "price": "free",
//     "courseinstructor": "vishal"
// }

[
    {},
    {},
    {}
]