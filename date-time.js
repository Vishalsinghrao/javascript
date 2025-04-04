let mydate = new Date()

// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.toTimeString())
// console.log(mydate.toUTCString())

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let Mytimestamp = Date.now()
// console.log(Mytimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  to convert ms in seconds

let Newdate = new Date;
console.log(Newdate.getDay());
console.log(Newdate.getMonth()+1);

console.log(Newdate.toLocaleString('default',{
    weekday : "long",
    month : "long"
}))

