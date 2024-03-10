class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }
    set email(email) {
        this._email = email;
    }

    get password() {
        return this._password.toUpperCase();
    }
    set password(password) {
        this._password = password;
    }
}

// const ratul = new User('ratul@email.com', '123abc');
// console.log(ratul.email);
// console.log(ratul.password);

function User2(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function email() {
            return this._email;
        },
        set: function email(email) {
            this._email = email;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password;
        },
        set: function (password) {
            this._password = password;
        }
    })
}

// const khan = new User2('khan@email.com', 'khan121');
// console.log(khan.email);
// console.log(khan.password);

const User3 = {
    _email: 'ratul@rktheme.com',
    _password: '123gggddd',

    get email() {
        return this._email.toUpperCase();
    },

    set email(email) {
        return this._email = email;
    }
}

const sohag = Object.create(User3);

console.log(sohag.email);
console.log(sohag._password);