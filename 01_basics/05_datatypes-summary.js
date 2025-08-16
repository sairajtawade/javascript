// Primitive and Non Primitive

// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);


// Reference (Non Premitive)

// Array, Objects, Functions

const heros = ["shaktiman", "dogo", "naagraj"];

const myObj = {
    name: "shaktiman",
    age: 60
};

const myFunction = function () {
    console.log('test');    
};


console.log(typeof myFunction);




