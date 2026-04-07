let score = "234a"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)  //NaN -> Not a Number

/*
"33" -> 33
"33a" -> NaN
true -> 1 | false -> 0
*/ 

let isLogedIn = true

let boolIsLogedIn = Boolean(isLogedIn)
console.log(boolIsLogedIn)

/*
1 -> true | 0 -> false
"" -> false
"Roshan" -> true
*/


//<----------- Operations ---------->

let val = 5
let negVal = -val
console.log(negVal)

let st1 = "Hello"
let st2 = " Roshan"
console.log(st1 + st2)

console.log("1" + 2);   //12
console.log(1 + "2");   //12
console.log("1"+2+1);   //121
console.log(1+2+"2");   //32


// === Strictly check (value,dataType)
// == check (convert then check)

