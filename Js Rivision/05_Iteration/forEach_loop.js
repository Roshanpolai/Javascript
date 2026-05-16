// const language = ["C++", "Java", "Python", "JS"];

// language.unshift("C");
//[ 'C', 'C++', 'Java', 'Python', 'JS' ]

// language.forEach( function (item) { // Callback function dont have name 
//     console.log(item);
// })

// Arrow Funtion |( ) => { }
// language.forEach((item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }
// language.forEach(printMe);

// language.forEach( (item, index, language) => {
//     console.log(item,index,language);
// })

// Array of object
// !------ imp* in DataBase ------!
// const coding = [
//     {
//         name : "Roshan",
//         email: "roshan@"
//     },
//     {
//         name : "subham",
//         email: "subham@"
//     },
//     {
//         name : "sneha",
//         email: "sneha@"
//     }
// ]

// coding.forEach( (item) => {
//     console.log(item.name);
// })
// Roshan
// subham
// sneha

// *Note: forEach doesn't retuen anything


// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (nums) => nums > 5); 
// o/p -> [ 6, 7, 8, 9, 10 ]


// const newNums = myNums.filter( (nums) => {
//     nums > 5;
// });
// o/p -> []


//<-------- NOTE(imp) --------->
// To overcome from the above error use -> return key-word
// scope -> {} || whenever use scope in side funtion use return 

// const newNums = myNums.filter( (nums) => {
//     return nums > 5;
// });
// console.log(newNums);
// o/p -> [ 6, 7, 8, 9, 10 ]


// <----- using forEach loop ----->
// const newNums = [];
// myNums.forEach( (nums) => {
//     if(nums >5){
//         newNums.push(nums);
//     }
// })
// console.log(newNums);
// o/p -> [ 6, 7, 8, 9, 10 ]




// const books = [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
// ];


// const userBooks = books.filter( (b) => b.edition === 2004);

// console.log(userBooks);
// [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 }
// ]


