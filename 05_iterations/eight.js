const myNums = [1, 2, 3]

// const initialVal = 0

// const myTotol = myNums.reduce((acc, curval) => {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, initialVal)


const myTotol = myNums.reduce((acc, curval ) => ( acc + curval),0)

// console.log(myTotol);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 9999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }

]

const totalPrice = shoppingCart.reduce((acc, curval) => acc + curval.price , 0 )

console.log(`Total bill is : ${totalPrice}`);

