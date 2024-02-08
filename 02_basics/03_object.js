// const tinderUser = new Object({name:'ratul',age:30})
const tinderUser = {
    name: "Ratul",
    age: 30,
    country: "Bangladesh",
    division: "Khulna",
    city: "Khnulna",
    address: "125/1 west baniakhamar main road khulna"
}
// console.log(tinderUser);
// console.log(tinderUser.address);
const objOne = { 1: 'a', 2: 'b', 3: 'c' }
const objTwo = { 4: 'a', 5: 'b', 5: 'c' }
const objThree = { 7: 'a', 8: 'b', 9: 'c' }

// const objOutput = Object.assign(objOne,objTwo,objThree) // Syntax one margin an object
// const objOutput = Object.assign({},objOne,objTwo,objThree) // Syntax two margin an object
const objOutput = { ...objOne, ...objTwo, ...objThree } // Syntax three margin an object
// console.log(objOutput);
const userObjKeys = Object.keys(tinderUser) // object keys
const userObjValues = Object.values(tinderUser) // object values
const userObjEntries = Object.entries(tinderUser) // object entries
console.log(userObjKeys);
console.log(userObjValues);
console.log(userObjEntries);

console.log(tinderUser.hasOwnProperty('address'));