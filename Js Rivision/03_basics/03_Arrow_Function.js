// this -> current context/value reference
// const user = {
//     username: "roshan",
//     price: "999",

//     welcomeMessage: function(){
//         console.log(`${this.username}, Welcome to Stremify`);
//     }
// }

// Browser's global object -> window obj
// user.welcomeMessage();
// console.log(this); // {}


// function user(){
//     const username = "Roshan";
//     console.log(this.username);     // undefined
// }
// user();


 // <----- Arrow function ------>
// const user = () => {
//     const username = "Roshan";
//     console.log(this.username);     // undefined
// }
// user();

// const addTwo = (num1, num2) => {
//     return num1+num2;
// }
// console.log(addTwo(1,2));        // 3
 

// Implicit return | use -> ()
const add = (num1,num2) => (num1+num2);
console.log(add(5,5)); //10

//Explicit return | use -> {}
const add1 = (num1,num2) => {
    return num1+num2;
}
console.log(add1(5,5)); //10





