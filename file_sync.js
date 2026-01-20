const fs=require("fs")

fs.copyFileSync("test.txt","dest.txt")
console.log("copied")

// fs.copyFile("test.txt","new_test.txt",(err)=>{
//     if(err){
//         console.log("Error ehile file is copied",err);
        
//     }
//     else{
//         console.log("copied successfully");
        
//     }
// })

fs.copyFileSync("urgent.txt","dest.txt")
console.log("file is copied");


// try {
//     fs.copyFileSync("urgent.txt", "dest.txt");
//     console.log("urgent file copied");
// } catch (err) {
//     console.log("Error copying urgent.txt:", err.message);
// }




// fs.unlink("dest.txt",(err)=>{
//     if(err){
//         console.log("error while deleting file");
        
//     }
//     else{
//         console.log("file deleted");
        
//     }
// })


// fs.unlinkSync("dest.txt")
// console.log("deleted successfully");
