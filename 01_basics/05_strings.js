const name = "sumant"
const repoCount = 23

// console.log(name + repoCount);
// console.log(`My name is ${name} and my repo count is ${repoCount}`);



const gameName = new String("sumant-sk")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(7));
// console.log(gameName.indexOf("k"));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);


const newStringOne = "  Shubhangi  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://sumant.com/sumant%20rai"

console.log(url.replace("%20","-"));

console.log(url.includes("rai"));

console.log(gameName.split("-"));


