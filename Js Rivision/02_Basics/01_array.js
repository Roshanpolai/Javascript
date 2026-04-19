const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,10];
// console.log(array);
// //console.log(array[0]); // 1

// const array1 = new Array(6,7,8,9,10);
// console.log(array1);

// const array2 = new Array(5); // creates an array of length 5 with empty slots

// array.push(6); // adds 6 to the end of the array
// array.unshift(0); // adds 0 to the beginning of the array
// array.pop(); // removes the last element (6)    
// array.shift(); // removes the first element (0)

// console.log(array.includes(3)); // true
// console.log(array.indexOf(3)); // 2

// const newArray = array1.join(); // joins array1 and newArray into a string
// console.log(newArray); // "1,2,3,4,5"
// console.log(typeof newArray); // string

//<-------  Slice  ----------->

// Syntax: array.slice(start, end); 
// creates a new array from index start to end-1 | Non-destructive

// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
// const citrus = fruits.slice(1, 3); 

// console.log(citrus); // ["Banana", "Orange"]
// console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"] (Unchanged)

// <------- Splice  ----------->

// Syntax: array.splice(start, deleteCount, item1, item2, ...)  
// modifies the original array by removing, replacing, or adding elements

// const months = ['Jan', 'March', 'April'];

// Insert 'Feb' at index 1, deleting 0 items
// months.splice(1, 0, 'Feb'); 
// console.log(months); // ["Jan", "Feb", "March", "April"]

// Replace 'March' with 'May' (1 item at index 2)
// months.splice(2, 1, 'May'); 
// console.log(months); // ["Jan", "Feb", "May", "April"]
