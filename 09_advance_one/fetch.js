// async function getAllUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     const err = new Error("SOME ERROR");
//     console.log("ERROR ", err);
//   }

// }

// getAllUser()

// fetch("https://jsonplaceholder.typicode.com/users")

// .then((res)=> res.json())
// .then((data)=>console.log(data))
// .catch((err)=> console.log(err))

// async function myData() {
//   try {
//     const sk = await fetch("https://api.github.com/users/rai64521");
//     const data = await sk.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// myData()




fetch('https://api.github.com/users/rai64521')

.then((res)=>{
    return res.json()
})

.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
  console.log(err);
  
})