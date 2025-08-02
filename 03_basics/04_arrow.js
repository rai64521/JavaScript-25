const user = {
    username: "sumant",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} Welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Shubhangi"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "sumant"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "sumant"
//     console.log(this.username);
    
// }
// chai()




// const chai = () => {
//     let username = "sumant"
//     console.log(this);

// }

// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "sumant"})


console.log(addTwo(3, 2));


// const myArray = [2, 3, 4, 6, 9]

// myArray.forEach( () => ())



