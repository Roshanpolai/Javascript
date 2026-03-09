/*
console.log("Helo world");
console.log("Roshan");
name="Roshan polai";
console.log(name);
x=null;
y=undefined;
age=19;
isfollw=true;
console.log(x);
console.log(age);
console.log(undefined);
console.log(isfollw);


let age=5;
age=9;
console.log(age);
const name="Roshan";
console.log(name);

<--- Object creation --->
const student={
    name:"Roshan",
    Roll:23,
    age:19,
};
student["age"]=student["age"]+1;
console.log(student);
console.log(student.age);

<--- practice P1 --->
const profile={
    used_id:"@roshan_polai_",
    follwer:180,
    following:280,
    if_follow:true,
}
console.log(profile); 

let a=9;
a+=2;
console.log(a++);
console.log(a); 

let a=8;
let b="8";
console.log(a === b);
//Equality sign in JS -> ===

let a=5;
let b=9;
console.log(a<b || a==b);
let n=9;
if(n%2 === 0)
{
    console.log("even");
}
else
{
    console.log("odd");
}


<---- Ternary operator --->
let age=3;
let r=age>18? "adult":"not";
console.log(r);

<---- pup up meseage ---->
alert("Hello"); 

-->Prompt operator for User i/p
let name=prompt("hii");
console.log(name); 
let num=prompt("Enter a number");
if(num % 5===0)
{
    console.log(num," is a multiple of 5");
}
else{
    console.log(num," is not a multiple of 5");
}

Example:
let grade=prompt("Enter your grade");
switch(grade)
{
    case 1:console.log("A");
    break;
    case 2:console.log("B");
    break;
    case 3:console.log("A");
    break;

}
let grade=prompt("Enter your grade (0-100)");
if( grade <=90 && grade >= 80)
{
    console.log("A");
}
else if(grade <=89 && grade >=70)
{
    console.log("B");
}
else if(grade <=69 && grade >=60)
{
    console.log("C");
}
else if(grade <=59 && grade >=50)
{
    console.log("D");
}
else
{
    console.log("F");
}

<--- Loop --->
let name="Roshan";
for(let i=1;i<=5;i++)
{
    console.log(name);
}


<---  for-of loop  --->
let name="Roshan";
for(let val of name)
{
    console.log(val);
}

<---- for-in loop ---->
let student={name:"Roshan",SIC:"23BECF33",branch:"ECE",CGPA:7.6,isPass:true}
for(let key in student)
{
    console.log(student[key]);
}


<---- String ----->
let name="Roshan";
let n=name.lenght;
for(let i=0;i<n;i++)
{
    console.log(name[i]);
}

<--- Templete Literals --- >
let obj={
    item:"Book",
    price:100,
};
let output=`The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);


<---  Newline & tab --->
console.log("Roshan \n Polai");
console.log("Roshan \t Polai");



<--- Username create --->
let name=prompt("Enter your name:");
let user_name="@" + name + name.length;
console.log(user_name);


<--- Array --->
let arr=["ram","sam","jaga"];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

Practice:
let marks=[86,89,75,98,78];
let total=0;
for(let i=0;i<marks.length;i++)
{
    total+=marks[i];
}
let avg=total/marks.length;
console.log(avg);

let price=[250,645,300,900,50];
let discounted=[];
for(let i=0;i<price.length;i++)
{
    discounted[i]=price[i]-(price[i]/10);
}
for(let i=0;i<discounted.length;i++)
{
    console.log(discounted[i]);
}



<----- Array Methods ----->
let heros=["Ironman","Thor","Capt.America"];
let h=["Salu bhai"]
console.log(heros.concat(h));

let c="Harry bhai";
heros.push(c);         //push() -> Add back   //unshift() - > Add Front
heros.pop();           //pop() -> Remove from back //shift() - > remove from Front
console.log(heros);
heros.slice(1,2);      //return Some portion
heros.splice(start idx , delcount , newEle)  //manupulate original array

<----  Functions ---->
function myfunction(msg){
    console.log(msg);
}
let msg="Hello World";
myfunction(msg); 

<--- Arrow Function ---> *imp
const arrowmul=(a,b)=>{
    console.log(a*b);
}

const Arrow=(str)=>{
    let count=0;
    for(const char of str)
    {
        if(char == "a" || char == "e" || char == "i" || char == "o" || char =="u"){
            count ++;
        }
    }
    console.log(count);
}

<--- forEach Loop --->
let nums=[1,2,3,4];
nums.forEach((num)=>{
   console.log(num*num)
});

<---- filter method --->
let arr=[1,2,3,4,6,7,8,9,10];
let evenarr=arr.filter((val)=>{
    return val % 2 === 0;
});
console.log(evenarr);

let a=arr.filter((val)=>{
    return val > 3;
});
console.log(a);

<---- reduce method --->
let marks=[67,98,78,85,92,90,55];
let ans=marks.reduce((res,curr)=>{
    return res+=curr;
})
console.log(ans);

<----- practice ---->
let marks=[67,98,78,85,92,90,55];
let toppers=marks.filter((m)=>{
    return m >= 90;
});
console.log(toppers);

let n=prompt("Enter a num n:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let ans=arr.reduce((res,curr)=>{
    return res*=curr;
})
console.log(ans);

*/

























