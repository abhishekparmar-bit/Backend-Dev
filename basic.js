const user={
    name:"Rahul",
    email:"Abhishek123@gmail.com",
    password:"abc123",
    social:{
        fb:"https://fb.com",
    }
}

// destructuring
const {name,email,social}= user;

const updateUser={...user,address:"MAthura"}

// console.log("updateUser",updateUser);

const user1={...user}; //spread operator for specific changes
user1.name="Ajay";
// console.log(user.name);

 const {password, ...publicData}=user; //rest operator for hiding something from object
//  console.log("publicData",publicData);

 const numbers=[1,2,3,4,5]
 const newNumbers=numbers.map((number)=>number*2)
//  console.log(newNumbers)

//  const sum=numbers.reduce(sum,number,0)=>sum+item)


 const rawUsers = [
{ id: 1, name: "Rahul", password: "fb_password", role: "admin" },
{ id: 2, name: "Sanya", password: "123_password", role: "user" },
{ id: 3, name: "Amit", password: "secret_password", role: "user" }
];

const safeUsers=rawUsers.map(({password, ...rawUsers})=>rawUsers);
// console.log("safeUSers",safeUsers);

const admin=rawUsers.filter((rawUsers)=>rawUsers.role=="admin")
// console.log("admin",admin);


const cart = [
{ item: "Laptop", price: 50000, quantity: 1, inStock: true },
{ item: "Mouse", price: 1500, quantity: 2, inStock: true },
{ item: "Keyboard", price: 3000, quantity: 1, inStock: false }
];

const checking=cart.filter((cart)=>cart.inStock==true)
const check={...checking,every:"ready to ship"}
// console.log("check",check)

const stock=cart.filter((cart)=>cart.inStock==false)
// console.log("stock",stock)

const total=checking.reduce((total,price)=>total+price,0)
console.log("Total bill",total)


let user;
setTimeout(() =>{
    user={name:"Rahul",
    email:"Abhishek123@gmail.com",
    password:"abc123"}
    console.log("Settimeout task")
},0)

Promise.resolve(()=>console.log("task3"))

console.log(users)

const fetchUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { name: "rahul", email: "bahisjj@gmail.com" },
        2: { name: "ansh", email: "bkjdskj@gmail.com" }
      };

      const user = users[userId];

      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 200);
  });
};
fetchUser(1)
.then((user)=>console.log(user))
.catch((err)=>console.log(err))

const userData=async(userId)=>{
    try{
const response=await fetch("url")
console.log("user data is fetched")
}
catch(e){
    console.log(e);
}
}



// let user;
// console.log("Parmar");

// setTimeout(()=>{
//   user={
//     name:"Abhishek",
//     email:"abhisek123@gmail.com",
//   }
//   console.log("Anu")

// },6000)

// Promise.resolve().then(()=>{
// console.log("Promise resolved")
// })

// console.log("abhi")