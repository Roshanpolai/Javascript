const email = "roshan3@gmail.com";

if(email){
    console.log(`your E-mailID is: ${email}`);
}
else{
    console.log("Enter your email");
}

// Better way
if(email.length != 0){
    console.log(`your E-mailID is: ${email}`);
}
else{
    console.log("Enter your email");
}


// falsy value:
// false -> 0, -0, "", null, undefined, NaN 

// truthy value:
// truth -> "0", 'false', " ", [], {}, function(){}


// false == 0  -> true
