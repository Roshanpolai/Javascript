const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const myNewNum = myNumbers.map( (num) => num+10);
// or
// const myNewNum = myNumbers.map( (num) => { 
//     return num+10
// });

// console.log(myNewNum);
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]


//<----- Chaining ------->
const newNums = myNumbers
                .map( (nums) => nums * 10) // updated value passed to next chain 
                .map( (nums) => nums + 5)

console.log(newNums);
// o/p
[
  15, 25, 35, 45,  55,
  65, 75, 85, 95, 105
]