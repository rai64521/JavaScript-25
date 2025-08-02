function calculateCardPrice(val1, val2, ...num1){
    return num1

}

console.log(calculateCardPrice(200, 400, 500, 2000));


const user = {
    username: "sumant",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({username: "shubhangi", price: 399})

const myArr = [200, 400, 100, 600]

function handleArray(anyArray){
    console.log(`Return second value: ${anyArray[2]}`);
    
}
// handleArray(myArr)

handleArray([200, 400, 100, 600])