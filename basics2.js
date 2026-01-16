// Fetching API

fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => console.log(data))
.then((user) => console.log(user))
.catch((err) => console.log(err))