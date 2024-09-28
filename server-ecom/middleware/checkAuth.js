const jwt = require("jsonwebtoken");
const { adminModal } = require("../modal/adminModal");

let checkAuth=async (req,res,next)=>{
    let getAdminData
    try{
        let getToken=req.headers.authorization.split(" ")[1]

        let decoded = jwt.verify(getToken, process.env.TokenKey);
        let adminId=decoded.adminID
       getAdminData= await adminModal.find({_id:adminId})
        
    }
    catch{
        getAdminData=[]
    }
    if(getAdminData.length==0){
        let obj={
            status:0,
            'message':"invalid Token"
        }
        return res.send(obj)
      }
   next()
}

module.exports={checkAuth}