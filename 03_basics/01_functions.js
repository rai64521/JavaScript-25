// function sayMyName() {
//   console.log("S");
//   console.log("U");
//   console.log("M");
//   console.log("A");
//   console.log("N");
//   console.log("T");
// }

// sayMyName()
// sayMyName()
// sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(5, 3)
// console.log("RESULT:",result);


function loginUserMessage(username = "shubhangi"){
    if(username === undefined){
        console.log("Plese enter a username");  
        return
    }
    return `${username} Just Logged In `
}

// const message = loginUserMessage("sumant")
const message = loginUserMessage("sumant")
console.log(message);




