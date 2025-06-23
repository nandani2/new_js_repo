console.log("Hello,Nandani");
const id=Symbol('123');
// primitive data type : String,number,symbol,boolean,bigInt,null.undefined.it is also called a call by value
//Non-primitive data type : Array,object,function
//it is a dynamically typed beacuse no need to declare variable type.it is required at runtime,not at compile time
const anotherId=Symbol('123'); //symbol data type
console.log(id == anotherId);
const bigNumber= 749826427n;
console.log(typeof(bigNumber));

//non-primitive
const heros=["shaktiman","naagraj","doga"];
let muObj={              //object
    name:"Nandani",
    age:23,
}

const myFunction=function(){      //function can also be treat like a variable
    console.log("Hello world");
}

console.log(typeof myFunction);