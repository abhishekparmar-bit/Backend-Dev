const fs=require("fs")
const path=require("path")
const {Transform}=require("stream")

const inputFilePath=path.join(__dirname,"100MB.txt")
const transformOutputFilePath=path.join(__dirname,"output.txt")

const readStream=fs.createReadStream(inputFilePath,{encoding:"utf-8"});
const writeStream=fs.createWriteStream(transformOutputFilePath);

const upperCaseTransform=new Transform({
    transform(chunk,encoding,callback){
        const transformedDate=chunk.toString().toUpperCase();
        
        callback(null,transformedDate);
    }
})

readStream.pipe(upperCaseTransform).pipe(writeStream);

writeStream.on("finish",()=>{
    console.log("stream finished");
    
})
