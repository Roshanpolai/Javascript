const accountId = 1234;
let accountEmail = "roshan9@gmail.com";
var accountPassword = "12345"
accountCity = "Bhubaneswar";

//accountId = 78910; //Not Allowed
console.log(accountId);

/*
Prefer not use var
because of issue in block scope and functional scope  
scope -> { }
*/

console.table([accountId, accountEmail, accountPassword, accountCity]); //Print multiple value at a time
