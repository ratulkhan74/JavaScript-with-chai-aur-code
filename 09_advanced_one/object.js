class Person {
    constructor(firstName, lastName, age, eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.eyeColor = eyeColor
    }

    static cratePersonId(){
        return `_pid_${Math.floor(Math.random() * 100000 + 1) }` ;
    }

    getPersonInfo() {
        console.log(`Firstname is: ${this.firstName}, Lastname is: ${this.lastName}, Age is: ${this.age} and Eye color is ${this.eyeColor}`)
    }

}

class MyMother extends Person {
    constructor(firstName, lastName, age, eyeColor, profession) {
        super(firstName, lastName, age, eyeColor);
        this.profession = profession;
    }
    mothersProfession() {
        console.log(`My mother is a ${this.profession}`);
    }
}

const myMother = new MyMother('Munzila', 'Khan', 47, 'black', 'Home maker');

myMother.getPersonInfo();
myMother.mothersProfession();