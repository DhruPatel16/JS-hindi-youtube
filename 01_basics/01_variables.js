const accountId = "144553"
let accountEmail = "dhru@google.com"
var accountPassword = "12345"
accountCity = "Vadodara"
let accountState;
// accountId=2 // not allowed

accountEmail = "dp@dp.com"
accountPassword = "21212121"
accountCity = "Mumbai"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

