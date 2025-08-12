const accountId = 21324;
let accountEmail = "test@gmail.com";
var accountPassword = "214234";
accountCity = "jaipur";

let accountState;

// accountId = 3454;  // const value update not allowed

accountEmail = "test12@gmail.com";
accountPassword = "234ad";
accountCity = "bengluru";

/*
Prefer not to use var beacause of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState ]);