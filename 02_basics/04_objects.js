// const tinderUser = new Object()      //Singletone

const tinderUser = {}                  //Non Singletone

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "rai@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sumant",
            lastname: "Rai"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    name:"Sumant Rai",
    age: 20,
    email: "sumantrai@gmail.com"
}
const obj2 = {
    gfname: "Shubhangi Mishra",
    gfage: 20,
    gfemail: "mshubhangi@gmail.com"
}

const obj3 = {
    fname: "Rishu",
    fage: 18,
    femail:" rairishuk@gmail.com"
}

// const myInfo = {obj1, obj2, obj3}

// const myInfo = Object.assign({}, obj1, obj2, obj3)

const myInfo = {...obj1, ...obj2, ...obj3}
// console.log(myInfo);


const users = [
    {
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 2,
        email: "S@gmail.com"
    },
    {
        id: 3,
        email: "T@gmail.com"
    },
    {
        id: 4,
        email: "R@gmail.com"
    },
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("id"));



