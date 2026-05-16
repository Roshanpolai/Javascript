// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }


// <---- for of loop ----->

//const arr = [1,2,3,4,5];
// for(const nums of arr){
//     console.log(nums);
// }


// <----- map(key, value) ----->

// const map = new Map();
// map.set(1,"Roshan");
// map.set(2,"subham");

//<--- for of loop on map ---> 
// for(const ele of map){
//     console.log(ele);
// }
// <--- OOT-PUT --->
// [ 1, 'Roshan' ]
// [ 2, 'subham' ]

// To get the values separately (Di-structure)
// for(const [key, value] of map){
//     console.log(key, value);
// }
// 1 Roshan
// 2 subham


//<---- for of loop in Object ---->

const student = {
    s1 : "Subham",
    s2 : "Roshan"
}

// for(const s of student){
//     console.log(s);
// }
// TypeError: student is not iterable | Use for in loop

// Print key's
for(const s in student){
    console.log(s);
}
//---- O/P ----
// s1
// s2

// Print value's
for(const s in student){
    console.log(student[s]);
}
// ---- O/P -----
// Subham
// Roshan

// used in Array | 2 ways -> get keys | get values
// Can't use for in loop in map


