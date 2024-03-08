const promiseOne = new Promise(function (reslove, reject) {
    setTimeout(function () {
        console.log('I am in promise');
        reslove();
    }, 1000);
});

promiseOne.then(function () {
    console.log('I am in THEN');
})

new Promise((reslove, reject) => {
    setTimeout(() => {
        console.log('I am in promise two');
        reslove();
    }, 1000);
}).then(() => {
    console.log('I am in then two');
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const users = {
            username: "ratulkhan74",
            password: "123",
        }
        resolve(users);
    }, 1000)
})
promiseThree.then((user) => {
    console.log(user.username);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = false;
        const users = {
            username: "ratulkhan",
            password: "123",
        }
        if (!err) {
            resolve(users);
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
})

promiseFour.then((users) => {
    return users.username;
}).then((username) => {
    console.log(`Username is: ${username}`);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Something has been done'))

// Promise five example
const promiseFive = new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
        resolve({ username: "javascript", password: "123", });
    } else {
        reject('Error: javascript went wrong');
    }
}, 1000);

async function promiseFiveData() {
    try {
        const respose = await promiseFive
        console.log(respose);
    } catch (error) {
        console.log(error);
    }
}
promiseFiveData()


// promise six

// async function getUsers() {
//     try {
//         const requestURL = 'https://api.github.com/users/hiteshchoudhary'
//         const respose = await fetch(requestURL);
//         const data = await respose.json()
//         console.log(data);
//     } catch (error) {
//         console.log('Error');
//     }
// }
// getUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });