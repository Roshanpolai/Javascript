/*
<----  Nesting  ------>
let age = 19;
if(age >= 18){
    if(age >= 60){
        console.log("senior");
    }
    else{
        console.log("middle");
    }
}
else{
    console.log("Child");
}

<----- CallBack Hell ------>
getData(1,() =>{
    console.log("getting Data1 .......");
    getData(2,() =>{
        console.log("getting Data2 .......");
        getData(3,() =>{
            console.log("getting Data3 .......");
            getData(4);
        })
    })
})
//CallBack Hell solve by Promises



<---- Promises ----->
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("some Error");
});


function getData(dataId, getNextData) {  //2s
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data: ", dataId);
            resolve("Sucsess");
            if (getNextData) {
                getNextData();
            }
        }, 4000);
    });
}


/*<------  Promiss Chnaning ------>
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data1");
            resolve("Success");
        }, 4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Data2");
            resolve("Success");
        },4000);
    });
}

console.log("fetching Data1........");
asyncFunc1().then((res) =>{        //Featch fun1 return promisses
    console.log("fetching Data2.......");
    asyncFunc2().then((res) => {});
});



<----- Async-Await--------->
async and await -> help you write code that waits without blocking.
async -> is used to declare that a function will run asynchronously (it can pause and resume).
await -> is used inside an async function to pause the code until the thing you’re waiting for is done, then continue.

function api(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(" data",dataId);
            resolve("Success");
        },2000);
    });
}

async function getAllData(){
    console.log("getting data1.......");
    await api(1);
    console.log("getting data2.......");
    await api(2);
    console.log("getting data3.......");
    await api(3);
}
*/
