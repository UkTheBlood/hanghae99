//async

async function fetchUser() {
        resolve('ellie');
}

const user = fetchUser();
user.then(console.log)
console.log(user)

//await
