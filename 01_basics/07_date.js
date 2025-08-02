// Dates

const myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


console.log(typeof myDate);


// let myCreatedDate = new Date(2025, 7, 1)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025, 7, 1, 12, 0)
// let myCreatedDate = new Date("2025-01-01")
let myCreatedDate = new Date("01-01-2025")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log( Math.floor(Date.now() / 1000));


let newDate = new Date()
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());

newDate.toLocaleString("default",{
    weekday: "long"
})







