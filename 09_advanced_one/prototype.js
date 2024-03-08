// let myArr = ['ratul', 'rabbi', 'anam'];

// console.log(myArr);

// creacting own method for string exect length
// let myName = 'Ratul        '
// console.log(`My name total length is: ${myName.length}`);

// String.prototype.exectLength = function () {
//     return `Exect length is: ${this.trim().length}`
// }
// console.log(myName.exectLength());

// console.log("khan       ".exectLength());

// Array.prototype.addArrayItem = function (item) {
//     return `${this.push(item)}`;
// }
// myArr.addArrayItem('raju')
// console.log(myArr);

// const User = {
//     name: "Ratul"
// }

// const Teacher = {
//     makeVideoForYoutube: true,
//     __proto__: User // Inheritench
// }

// const AssTecher = {
//     isAvailable: false
// }

// Teacher.__proto__ = User; //Inheritench

// Object.setPrototypeOf(Teacher, User) //Inheritench

function setUsername(username) {
    this.username = username;
}

function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const newuser = new createUser('ratulkhan', 'ratul@email.com', '12345');
console.log(newuser);
