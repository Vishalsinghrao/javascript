// Object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "vishal",
    "full name": "vishal singh rao",
    [mySym]: "mykey1",
    age: 20,
    location: "udaipur",
    email: "vishalsinghrao140@gmail.com",
    isLoggedin: false
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]); // you can't access this value with the dot
// console.log(Jsuser[mySym]);

Jsuser.email = "vishal130@gmail.com"
// Object.freeze(Jsuser)

Jsuser.email = "vishal@gmail.com"
console.log(Jsuser.email);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

