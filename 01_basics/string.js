// declaration of string

const string1 = "A string primitive";
const string2 = `Yet another string primitive`;
const string3 = new String("A String object");

// fucntions of strings

//Character access

string1.charAt(1);
string2[1];

//Comparing strings
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

console.log(typeof string3);

