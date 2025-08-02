// var c = 300

let a = 300

if (true) {
  let a = 10;
  const b = 20;
//   var c = 30;
   console.log("INNER:",a);
   
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "sumant"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}

// one()

if(true){
    const username = "sumant"
    if(username === "sumant"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);   // website is not access here it is out of scope  
}
// console.log(username);      // username is not accessible here it is out of scope


// ++++++++++++++++++++++++++++++++++++++ nteresting ++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(addone(4));

function addone(num){
    return num + 1
}


// console.log(addone(4));

addTwo(3)
const addTwo = function(num){
    return num + 2
}

