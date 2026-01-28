const express=require("express")

const app=express();

const port=8000;

const students=[
    {id:1,name:"Abhishek",branch:"CSE"},
    {id:2,name:"Abhi",branch:"ECE"},
    {id:3,name:"Ansh",branch:"Bio"},
]

app.get("/",(req,res) =>{
    res.send(`Welcome to home page`);
})

// app.get("/user",(req,res)=>{
//     res.send("user page");
    
// })
// app.get("/students",(req,res)=>{
//     res.json(students)
// })

// app.get("/students/:id",(req,res)=>{
//     const user=students.find(c=>c.id===parseInt(req.params.id));
//     if(user){
//         res.json(user);
//     }
//     else{
//         res.send("Student not found")
//     }
// })

app.get("/students/search",(req,res)=>{
    const searchQuery=req.query;
    res.send(req.query)
})

app.listen(port,()=>{
    console.log("Server is running on port 8000");
    
})