const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network

  setTimeout(function () {
    console.log(`Async task is complete`);
    resolve();
  }, 1000);
});

promiseOne.then(function (promiseOne) {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log(`Async task 2`);
    resolve();
  }, 1000);
}).then(() => {
  console.log(`Promise two is consumed`);
});

// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log(`DB CONNECTED`);
//         reject()
//     },3000)
// })

// .then(()=>{
//     console.log("DB CONNECTED IS SUCCESSFULLY");

// })
// .catch(()=>{
//     console.log("Something went wrong not conntected");

// })

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "sumant", email: "rai@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "shubhangi", password: "123" });
    } else {
      reject(`Error: Something went wrong`);
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("The promise is either resolved and rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = true;
    if (!err) {
      resolve({ username: "sumant", password: "123" });
    } else {
      reject(`ERROR: JS Went wrong`);
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

consumePromiseFive();
