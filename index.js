const http=require("http")
const fs =require("fs")

const server=http.createServer((req,res)=>{
    // res.writeHead(200,{"Content-Type": "application/json"});
    // const data={
    //     name:"Abhis",
    //     email:"abhishek123@gmail.com"
    // }
    // res.end(JSON.stringify(data))
    // res.end("Response is closed");

    switch(req.url){
        case "/":
            res.writeHead(200,{"content-type":"text/html"})
            res.end("<h1> Welcome to the page </h1>")
            break;
        case "/about":
            res.writeHead(200,{"content-type":"text/html"})
            res.end("<h1> Welcome to the about page </h1>")
            break;
        default:
            res.writeHead(404,{"content-type":"application/json"})
            res.end({username:"",phone:""})
            
    }
})

server.listen(8000, ()=>{
    const logdata= `[${new Date().toLocaleString()}] Server started on port 8000`;
    require("./logger").logActivity(logdata);
    fs.appendFile("activity2.log", `${logdata}\n`, (err) => {
        if (err) console.log(err);
      });
    console.log("Server is running on port 8000");
})
