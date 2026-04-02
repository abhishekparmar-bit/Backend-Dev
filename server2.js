const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const todoRoutes = require("./routes/todo.routes");

app.use(express.json());
app.use(cookieParser());  

app.use("/api/todos", todoRoutes);

app.get("/set-cookie", (req, res) => {
    res.cookie("name", "user-1");
    res.send("Cookie set");
});

app.get("/get-cookie", (req, res) => {
    res.json(req.cookies);
});

app.post()

app.get("/profile",(res,req)=>{
    if(!req.session.user){
        return res.statusCode(401).send("User not logged in")
    }
    res.send(`Welcome ${req.session.user}`)
})


app.get("/logout",(req,res)=>{
    req.session.destroy()
    return res.send("logged out")
})



module.exports = app;
