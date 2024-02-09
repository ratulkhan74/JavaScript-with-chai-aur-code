
const user = {
    username:"ratul",
    price: 999,
    welcomeMessage: function(){
        let message = `Welcome ${this.username}!`
        console.log(message);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "khan"
// user.welcomeMessage()


function funcOne(){
    console.log(this);
}
funcOne()