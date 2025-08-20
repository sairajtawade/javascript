// arrays 

//declaration 

const myArr = [0,1,2,3,4,5];
const myHeros = ["shaktiman", "krish"];

const myArr2 = new Array (1,2,3,4);

// console.log(myArr[1]);

// Array Methods

myArr.push(6); // add value in last
myArr.pop(); // remove value from last
myArr.unshift(9); // add value in start position, note : they change the position of all value
myArr.shift();  // remove value from first 

myArr.includes(9); // false
myArr.indexOf(9); // -1 because value does not exist
myArr.indexOf(3); // 2 because 3 in 2 index

const newArr = myArr.join(); // convert array into type string

// console.log(newArr); // 0,1,2,3,4,5


// slice and splice

// slice # Definition: Returns a shallow copy of a portion of an array into a new array.
// note : Does NOT modify the original array.

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3);

console.log(myn1);         // [ 1, 2 ]
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ]   

// splice # Definition: Changes the array by removing, replacing, or adding elements.
// note : Modifies the original array.
// splice ex array.splice(start, deleteCount, additem1, additem2, ...)

const myn2 = myArr.splice(1,3,10,11,12);

console.log(myn2);          // [ 1, 2, 3 ]
console.log("C ", myArr);   // C  [ 0, 10, 11, 12, 4, 5 ]
