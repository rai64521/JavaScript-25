const accountId = 33468
let accountEmail = "sumant@chatgpt.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;


// accountId = 32726         //not allowed

accountEmail = "rai64521@gmail.com"
accountPassword = "sumant123"
accountCity = "Delhi"


console.log(accountId);

/*
prefer not to use var
beacuse of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


