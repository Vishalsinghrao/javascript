const name = "vishal"
const age = 18

// console.log(name + age)

// console.log(`Hello my name is ${name} and my age is ${age}`)

const Gamename = new String('Detroit')

// console.log(Gamename[0]);
// console.log(Gamename.__proto__);
// console.log(Gamename.charAt(2));

const newstring = Gamename.substring(0,4);
console.log(newstring);

const anothetstring = Gamename.slice(-6,3);
console.log(anothetstring);

const newstringone = "    vishal   "
console.log(newstringone.trim());


const url = "https://vishal.com/vishal%20singhrao"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
