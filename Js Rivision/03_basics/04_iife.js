// Immediately Invoked Function Expression
//(function defination)(function call)


(function chai(){ // Named IFFE
    console.log(`Db Connected`);         // Db Connected
})();

((name) => {      // // UnNamed IFFE
    console.log(`${name} is connected`); // MongoDb is connected
}
)('MongoDb'); 


