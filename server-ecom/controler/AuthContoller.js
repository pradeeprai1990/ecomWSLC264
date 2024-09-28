const { adminModal } = require("../modal/adminModal")
var jwt = require('jsonwebtoken');

let login=async (req,res)=>{
    let obj
    let userName=req.body.email
    let userPassword=req.body.password
    let adminTable=await adminModal.findOne({adminUname:userName,adminUpassword:userPassword})
    if(adminTable!==null && adminTable!==undefined && adminTable!='' ){
        var token = jwt.sign({ adminID:adminTable._id }, process.env.TokenKey);  

       obj={
            status:1,
            msg:adminTable,
            token
        }
    }
    else{
        obj={
            status:0,
            msg:'Invalid UserName or Password'
        }
    }
    res.send(obj)
}

module.exports={login}