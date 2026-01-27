const fs=require("fs")
const path=require("path")

const inputFilePath=path.join(__dirname,"100MB.txt")

const outputFilePath=path.join(__dirname,"output.txt")

const inputStream=fs.createReadStream(inputFilePath)

// inputStream.on("data",(chunk)=>{
//     console.log("data is reading in chunks:",chunk);
    
// })

const file=fs.readFileSync("Streams/100MB.txt","")
console.log(file);


// const asyncFile = fs.readFile("Streams/100MB.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Errror in file reading",err);  
//     }
//     else{
//         console.log("File Reading successfull",data);
        
//     }
// })




// const writeStream=fs.createWriteStream(outputStream)

// inputStream.pipe(outputStream)