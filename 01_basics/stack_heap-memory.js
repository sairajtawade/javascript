// Stack (Primitive) and Heap (Non Primitive - Reference)

let myYoutubeName = "abc@google.com";
let anotherName = myYoutubeName;

anotherName = "asdaf@google.com";

console.log(myYoutubeName);
console.log(anotherName);

/////////////////////////////////////////////////////////////////////////////////////////


let userOne = {
    email: "test@gmail.com",
    upi: "testupi12"
};

let userTwo = userOne;
userTwo.email = "rrr@gmail.com";

console.log(userOne);
console.log(userTwo);
