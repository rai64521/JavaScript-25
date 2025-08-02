// singleton
// Object.create


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sumant",
    "full name": "sumant rai",
    [mySym]: "mykey1",
    age: 20,
    location: "Mumbai",
    email: "sumant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondey", "Saturday"]

}
 
console.log(JsUser.email);            // dot access
console.log(JsUser["email"]);         // squre bracket access

console.log(JsUser["full name"]);

console.log(JsUser[mySym]);
console.log(typeof mySym);

JsUser.email = "sumant@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "sumant@chatgpt.com"

console.log(JsUser);




JsUser.greeting = function(){
    console.log("Hello, Js User");   
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);   
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


