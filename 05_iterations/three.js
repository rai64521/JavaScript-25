// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const key of arr) {
    // console.log(key);
    
}


const greetings = "Hello World"

for (const key of greetings) {
    // console.log(`Each char is ${key}`);
    
}


// Maps 

const map = new Map()

map.set("IN", "India")
map.set("USA", "United state of america")
map.set("Fr", "france")
map.set("IN", "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}


// const myObject = {                // Not working 
//     game1 : "NFS",
//     game2 : "Spiderman"
// }

// for (const [key,value] of myObject) {
//     console.log(key, value);
    
// }