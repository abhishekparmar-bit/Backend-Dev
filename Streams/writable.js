const fs=require("fs")
const path=require("path");
const {Transform}=require("stream")
const inputFilePath=path.join(__dirname,"100MB.txt")
const outputFilePath=path.join(__dirname,"output.txt")

const readStream=fs.createReadStream(inputFilePath,"utf-8")

const writeStream=fs.createWriteStream(outputFilePath,"utf-8");
readStream.pipe(writeStream);

writeStream.on("finish",()=>{
    console.log("write stream is end");
    
})

