
// basic function adding two numbers
function addTwoNumbers(num1, num2) {
    let result = num1 + num2
    console.log(result);
}
// addTwoNumbers(5,8)

// Sending message to login user
function sendMessageTOLoggedInUser(username) {
    if (!username) {
        let message = "You cannot access without login"
        return message
    }
    return `Welcome back ${username}!`
}
// console.log(sendMessageTOLoggedInUser(""));

// using rest operator in function
function calculateCartPrice(itemPriceOne, itemPriceTwo, ...itemPrice) {
    let firstTwoItemPrice = itemPriceOne + itemPriceTwo;
    if (Array.isArray(itemPrice)) {
        let allItem = 0;
        let itemLength = itemPrice.length; // getting the array length
        for (let i = 0; i < itemLength; i++) {
            let price = itemPrice[i]
            allItem = allItem + price;
        }
        let totalPrice = allItem + firstTwoItemPrice;
        return `Total price is: $${totalPrice.toFixed(2)} USD`;
    }
}
// console.log(calculateCartPrice(100, 500, 800,2500));

// Object in function
const user = {
    username: "ratul",
    price: 7000
}
function handleObject(anyObject) {
    return `Username is ${anyObject.username} and price is $${anyObject.price} USD`;
}
// Object can be passed as an argument
// console.log(handleObject(user)); 
// console.log(handleObject({
//     username: 'ratul74',
//     price: 500
// }));

// Array in function
const myArray = ['ratul', '2000']
function returnArrayValue(value) {
    return `Name is ${value[0]} and price is ${value[1]}`
}
// Array can be passed as an argument
// console.log(returnArrayValue(myArray));
console.log(returnArrayValue(['ratulkhan74', '3000']));
