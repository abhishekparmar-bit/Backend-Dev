<<<<<<< HEAD
const express=require("express")

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// To serve static files
// app.use(express.static("public"))

const PORT=5000;

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/form.html");
})

app.post("/student/register",(req,res)=>{
    console.log("form data:",req.body);
    res.send("registered successfully");
})
app.listen(PORT,()=>{
    console.log(`Server is running on: ${PORT}`)
})
=======
const express=require("express")

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// To serve static files
// app.use(express.static("public"))

const PORT=5000;

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/form.html");
})

app.post("/student/register",(req,res)=>{
    console.log("form data:",req.body);
    res.send("register");
})
app.listen(PORT,()=>{
    console.log(`Server is running on: ${PORT}`)
})
>>>>>>> 2b26138 ([Abhishek] Submitted on 11-02-2025)
