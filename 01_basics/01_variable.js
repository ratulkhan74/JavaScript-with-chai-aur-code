/**
 * Note for using var keyword
 * ----------------------------
 * Constants are not changeable
 * Constant decleared with const keyword
 */
const accountId = 1235434 // This is a constant variable decleared with keyword const
let accountEmail = "ratul@email.com"
/**
 * Note for using var keyword
 * ------------------------------------
 * Var keyword not prefer to use in declaring javascript varibles
 * Because of issue in jsvaScript scope
 * (1). Block scope
 * (2). Functional scope
 * */

// Not preferable way to declare variable with var keyword
var accountPassword = "123452345" 

// Without any variable keywords (const,let,var) variables are not safe for programs
//acountCity = "Khulna" 
let acountCity = "Khulna"

// This is a undefined variable
let accountDivision; 

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, acountCity, accountDivision])