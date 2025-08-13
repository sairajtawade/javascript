let score = "abc";

// console.log(typeof(score));
// console.log(typeof score);


let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33ad" => NaN
// true => 1; false => 0;

let isLoggedIn = "abc";

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false
// "afs" => true

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(typeof stringNumber);
console.log(stringNumber);


// **********************************Operations**************************************

// prefix and postfix

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


/*
If used postfix, with operator after operand (for example, x++),
 the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x),
 the increment operator increments and returns the value after incrementing.

*/