// <----- Singleton object ------->
// const fbUser = new Object();
// fbUser.id = "23becf33"
// fbUser.name = "Roshan"
// fbUser.email = "roshan3@"
// fbUser.login = false


//Object literal or non-singleton obj
// const instUser = {
//     id : "23becf33",
//     name : "Roshan",
//     email : "roshan3@",
//     login : false
// };

// console.log(fbUser);   // {} empty object
// console.log(instUser); // {} empty object 


// console.log(fbUser); //{ id: '23becf33', name: 'Roshan', email: 'roshan3@', login: false }
// console.log(instUser); //{ id: '23becf33', name: 'Roshan', email: 'roshan3@', login: false }

//<----- Object inside Object ----->
// const xUser = {
//     email: "xyz@gmail.com",
//     fullName : {
//         firstName: "Roshan",
//         lastName: "Polai"
//     }
// }

// console.log(xUser.fullName); // { firstName: 'Roshan', lastName: 'Polai' }
// console.log(xUser.fullName.firstName); // Roshan 



// <---- Cobine of two objects ---->
// const obj1 = {
//     a: "A",
//     b: "B"
// }
// const obj2 = {
//     c: "C",
//     d: "D"
// }
// Object.assign(target, source1, source2, ....sourceN)  //target -> {}
// Object.assign({},obj1);

// const obj = {obj1,obj2}; // { obj1: { a: 'A', b: 'B', c: 'C', d: 'D' }, obj2: { c: 'C', d: 'D' } }

// const obj3 = Object.assign({},obj1,obj2); // { a: 'A', b: 'B', c: 'C', d: 'D' }
// OR
// const obj3 = {...obj1, ...obj2}; //Spread operator

// console.log(obj3);
// console.log(obj);
 

// <--- Array Object ---->
const user = [
    {
        id: 1,
        email: "roshan@gmail.com"
    },
    {
        id: 2,
        email: "sam@gmail.com"
    }
]

console.log(user[1].email); //sam@gmail.com

console.log(Object.keys(user)); //[ '0', '1' ]
console.log(Object.values(user));  
//[
//   { id: 1, email: 'roshan@gmail.com' },
//   { id: 2, email: 'sam@gmail.com' }
// ]

