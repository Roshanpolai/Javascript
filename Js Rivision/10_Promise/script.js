/*
<----- Promise –--->
What is a Promise?
A Promise is an object in JavaScript used to handle asynchronous operations.

It represents:
Success → resolve()
Failure → reject()


Promise-State     States-Meaning
Pending	          Initial state
Fulfilled	      Operation successful
Rejected	      Operation failed


<--- Syntax --->
const promise = new Promise((resolve, reject) => {
    let success = true;

    if(success){
        resolve("Success");
    } else {
        reject("Failed");
    }
});


<--- Consuming Promise --->
promise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Completed");
});


Method's	  Use
.then()	      Handles success
.catch()	  Handles error
.finally()	  Runs always


Promise Chaining
Promise.resolve(5)
.then((num) => num * 2)
.then((num) => console.log(num));


Promise Methods       Method-Purpose
Promise.all()	      Runs all promises together
Promise.race()	      Returns first completed promise
Promise.any()	      Returns first successful promise
Promise.allSettled()  Waits for all promises


Async Await
async function getData(){
    const data = await fetchData();
    console.log(data);
}

async → makes function return a Promise
await → waits for Promise result
*/




// const promiseOne = new Promise( function (resolve, reject) {
//     setTimeout(function() {
//         console.log('Async task is completed');
//         resolve();
//     }, 2000)
// });


// promiseOne.then(function(){
//     console.log('Promise is resolved');
// })


// new Promise(function(resolve,reject){
//     setTimeout(function() {
//         console.log('Async Taks2');
//         resolve();
//     }, 2000);
// }).then(function() {
//     console.log('Async 2 is resolved');
// })


// const promiseThree = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         resolve({username:"Roshan", email:"roshan@gmail.com"});
//     }, 2000);
// })

// promiseThree.then(function(user) {
//     console.log(user)      // o/p - { username: 'Roshan', email: 'roshan@gmail.com' }
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         let error = false;
//         if(!error){
//             resolve({username: "Roshan", passwod: "roshan@123"});
//         }
//         else{
//             reject('Error: Something went wrong');
//         }
//     }, 2000)
// });


// promiseFour
// .then((user) => {
//     return user.username;
//     console.log(user);
// })
// .then((username) => {
//     console.log(username);
// })
// .catch((error) => {      // if any error happen, then run catch
//     console.log(error);
// })
// .finally(() => {        // finally run always
//     console.log("Promise is either resolved or rejected");
// })



//<---- Async/Await ---->
// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         let error = false;
//         if(!error){
//             resolve({username: "Roshan", passwod: "roshan@123"});
//         }
//         else{
//             reject('Error: Something went wrong');
//         }
//     }, 2000)
// });


// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive();


// async function getAllUsers() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         // console.log(response);

//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){ 
//         console.log(error);
//     }
// };


// getAllUsers();



// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// });





/*
========================================================
        JAVASCRIPT PROMISES + ASYNC/AWAIT NOTES
========================================================

--------------------------------------------------------
1. WHAT IS A PROMISE?
--------------------------------------------------------
-> Promise is an object representing:
   - success of async operation
   - failure of async operation

Promise States:
1. Pending
2. Fulfilled (resolved)
3. Rejected

Syntax:

const promise = new Promise((resolve, reject) => {

});

resolve() -> success
reject()  -> failure


--------------------------------------------------------
2. BASIC PROMISE EXAMPLE
--------------------------------------------------------
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task completed");
        resolve();
    }, 2000);
});

promiseOne.then(function(){
    console.log("Promise resolved");
});

Output:
Async task completed
Promise resolved


Explanation:
- Promise created
- setTimeout simulates async work
- resolve() marks promise successful
- .then() runs after resolve()


--------------------------------------------------------
3. PROMISE WITHOUT VARIABLE
--------------------------------------------------------
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    }, 2000);

}).then(function(){
    console.log("Async 2 resolved");
});


--------------------------------------------------------
4. PASSING DATA THROUGH PROMISE
--------------------------------------------------------
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "Roshan",
            email: "roshan@gmail.com"
        });
    }, 2000);
});

promiseThree.then(function(user){
    console.log(user);
});

Output:
{
   username: "Roshan",
   email: "roshan@gmail.com"
}

--------------------------------------------------------
5. PROMISE CHAINING
--------------------------------------------------------
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username: "Roshan",
                password: "1234"
            });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 2000);

});


promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Promise completed");
});


Important:
.then()    -> handles success
.catch()   -> handles error
.finally() -> always runs


--------------------------------------------------------
6. IMPORTANT MISTAKE
--------------------------------------------------------
Wrong:
return user.username;
console.log(user);

Reason:
After return, code never executes.

Correct:
console.log(user);
return user.username;


--------------------------------------------------------
7. ASYNC / AWAIT
--------------------------------------------------------
-> Cleaner way to handle promises
-> Makes async code look synchronous

Rules:
1. async always returns promise
2. await waits for promise completion

Example:
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username: "Roshan",
                password: "1234"
            });
        } else {
            reject("ERROR");
        }
    }, 2000);
});


async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();


--------------------------------------------------------
8. WHY TRY-CATCH?
--------------------------------------------------------
Because:
await can throw errors.

try -> runs code
catch -> handles errors safely

--------------------------------------------------------
9. FETCH API
--------------------------------------------------------
-> Used to make HTTP requests
-> Used for APIs

Example:
async function getAllUsers(){
    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        
        const data = await response.json(); //String -> Json
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

getAllUsers(); 

--------------------------------------------------------
10. IMPORTANT FETCH POINT
--------------------------------------------------------
response.json() ALSO returns a promise.
So we use:
await response.json()

--------------------------------------------------------
11. FETCH USING .then()
--------------------------------------------------------
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

--------------------------------------------------------
12. FETCH FLOW
--------------------------------------------------------
fetch()
   ↓
response
   ↓
response.json()
   ↓
actual data

--------------------------------------------------------
13. ASYNC/AWAIT VS THEN/CATCH
--------------------------------------------------------
Async/Await:
- cleaner
- easier to read
- better for large code

Then/Catch:
- chaining style
- harder for complex code

--------------------------------------------------------
14. EVENT LOOP
--------------------------------------------------------
Node.js and JS are single-threaded.
Event Loop handles:
- async tasks
- callbacks
- timers
- API requests

Flow:
Call Stack
   ↓
Web APIs
   ↓
Callback Queue
   ↓
Event Loop

--------------------------------------------------------
15. MICROTASK QUEUE
--------------------------------------------------------
Higher priority than callback queue.
Examples:
- Promise.then()
- catch()
- finally()

Priority:
Microtask Queue > Callback Queue

--------------------------------------------------------
16. CALLBACK HELL
--------------------------------------------------------
Nested callbacks causing unreadable code.
Example:
login(user, () => {
    getData(() => {
        updateData(() => {
            logout();
        });
    });
});


Solution:
- Promises
- Async/Await

--------------------------------------------------------
17. PROMISE METHODS
--------------------------------------------------------
.then()    -> success
.catch()   -> failure
.finally() -> always runs


--------------------------------------------------------
18. IMPORTANT INTERVIEW QUESTIONS
--------------------------------------------------------
Q1. Difference between Promise and Callback?
Callback:
- nested
- callback hell

Promise:
- cleaner
- chaining possible

Q2. Is fetch synchronous?
No.
Fetch is asynchronous.

Q3. Does await block whole program?
No.
It only pauses inside async function.

Q4. Why use async/await?
- cleaner syntax
- better readability
- easier error handling

--------------------------------------------------------
19. MOST IMPORTANT TOPICS FOR OA
--------------------------------------------------------
1. Promise
2. Promise Chaining
3. Async/Await
4. Fetch API
5. Event Loop
6. Microtask Queue
7. setTimeout
8. try-catch
9. JSON parsing
10. API handling
*/
