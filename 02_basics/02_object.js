const mySymble = Symbol('key1')
const User = {
    name: "Ratul",
    "full name": "Ratul Khan",
    age: 30,
    location: "Khulna",
    email: "ratul@email.com",
    isLogedIn: false,
    [mySymble]:"symbleKey" // Inserting a symble in to a object
}

// console.log(User.name);
// console.log(User["full name"]);
// console.log(User);
// console.log(User[mySymble]);

User.gretings = function(){
    console.log(`Hello ${this.name}`);
}
console.log(User.gretings());

User["full name"] = "Sohag khan"
console.log(User["full name"]);

// Object.freeze(User) // Freesz method will not allow change naything in to an object
// User.name = "Sohag"
// console.log(User.name);