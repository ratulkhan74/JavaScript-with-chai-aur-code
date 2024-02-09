// global scope
let numberOne = 30
const num1 = 50

// Accessing global scope
function addTwoNumbers(number){
return number + num1 // num1 is a global variable
}
// console.log(addTwoNumbers(30));

// Accessing local scope in a nested function
function userInfo(){
    const username = "ratul" // username is a local scope of userInfo() funtion
    function detailInfo(){
        const address = "125/1 west baniakhamar main road khulna" // address is a local scope of detailInfo()
        console.log(username); // accessing username as a global scope in the child function of the userInfo() function
    }
    detailInfo()
    //console.log(address); // trying to access a local scope variable from detailInfo() function in userInfo() function scope as global scope | Error will be occurred becouse of the address variable is a local scope of the detailInfo() function and we are trying to access the variable from outside the function scope
}
userInfo()