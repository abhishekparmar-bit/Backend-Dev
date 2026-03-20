const router=require('express').Router();

const { readfile, writefile } = require('../Modules/fileHandler')

const getAllStudents=async function(req,res){
    let search = req.query.search?req.query.search.toLowerCase():""
    const filedata = await readfile();
    let filterdata = filedata;
    return res.status(200).json(filedata);
        
    // if (search) {
    //     filterdata = filedata.filter(emp => emp.Name.toLowerCase().includes(search) || emp.Email.toLowerCase().includes(search) || emp.Department.toLowerCase().includes(search) || emp.ID.toLowerCase().includes(search))
    // }
    
    // res.render('index', {filedata:filterdata })


}
const createStudent=async function(req,res){
    const { ID, Name, Email, Department, Basic_Salary } = req.body;
    const readdata = await readfile();
    readdata.push({ ID, Name, Email, Department, Basic_Salary: Number(Basic_Salary) })

    await writefile(readdata);
    res.redirect('/')
}
module.exports={getAllStudents,createStudent}
