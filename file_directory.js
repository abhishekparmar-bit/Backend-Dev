const fs=require("fs");


// creating a new directory
fs.mkdir("newdirectory",(err)=>{
    if(err){
        console.log(err);
        return ;
    }
    console.log("created");
    
})
fs.mkdir("folders/folder1/folder2",{ recursive:true},(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Directory is created");
    
})


// reading dorectory i.e reading files name in directory
fs.readdir("newDirectory",(err,files)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("files",files);
    
})


// delete empty directory 
fs.rmdir("newdirectory",(err)=>{
    if(err){
        console.log(err);
        return;
        
    }
    console.log("directory is removed");
    
})


// delete directory with files
fs.rm("newdirectory",{recursive:true,force:true},(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("directory removed");
    
})