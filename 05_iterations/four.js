const myObject = {
    js: "javascript",
    py: "python",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const programming = ["javascript", "python", "ruby", "cpp", "swift", "goo"]

for (const key in programming) {
//    console.log(programming[key]);
   
}


const map = new Map()

map.set("IN", "India")
map.set("USA", "United state of america")
map.set("Fr", "france")
map.set("IN", "India")

for (const key in map) {
    // console.log(key);
     
}