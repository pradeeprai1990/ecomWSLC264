const { transporter } = require("../../mainConfig");
const { userModal } = require("../../modal/userModel");
const bcrypt = require('bcrypt');

const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

let myMap = new Map();
let register=async (req,res)=>{

    let userCheck=await userModal.findOne({userEmail:req.body.uemail})

    if(userCheck){
        let obj={
            status:0,
            message:"Email Allredy Exits..."
        }
        res.send(obj)
    }
    else{
        let userOTP= String(Math.random()*9999999).slice(0,4) //OTP | 4DIGIT
 
        myMap.set('OTP',userOTP)
        let toEmail=req.body.uemail //   pradeeprai.wscube@gmail.com
    
        const info = await transporter.sendMail({  
            from: '"OTP Mail 👻" <pradeep.9997@gmail.com>', // sender address
            to: toEmail, // list of receivers
            subject: "OTP frank ✔", // Subject line
           
            html: `<b>OTP</b> ${userOTP}`, // html body
          });
        //mail
        
        res.status(200).json({message:'success', status:1 });
    }
   
}


let verifyOtp=async (req,res)=>{
  

    let opt=req.body.otp;  //Cleint
    let getMyOtpt=myMap.get('OTP') //Server
    if(opt==getMyOtpt){

        let pass=req.body.upassword
        const hashPassword = bcrypt.hashSync(pass, salt);

        try{
            let userOBJ={
                userName:req.body.uname,
                userPassword:hashPassword,
                userEmail:req.body.uemail
            }
            let userTable= new userModal(userOBJ)
            await userTable.save()
            let obj={
                status:1,
                message:"User Created..."
            }
            res.send(obj)
        }
        catch(error){
            let obj={
                status:0,
                message:"error...",
                error
            }
            res.send(obj)
        }
        
    }
    else{
        let obj={
            status:0,
            message:"Please enter correct OPT..."
        }
        res.send(obj)
    }
   
   

}
let loginUser=async (req,res)=>{
    let {userEmail,userPassword}=req.body;
    let obj
        let userData= await userModal.findOne({userEmail:userEmail})
        if(userData){
          
            let userDbpass=userData.userPassword;
           let passCheck=bcrypt.compareSync(userPassword, userDbpass);
            if(passCheck){
                //Token Create
                //Client React  - >Cookie
                //React Slice | Store

            }
            else{
                 obj={
                    status:0,
                    error:'Please enter correct Correct Password '
                }
                res.send(obj)
            }
        }
        else{
             obj={
                status:0,
                error:'Please enter correct email id '
            }
            res.send(obj)
        }
        
    
   
}
module.exports={register,verifyOtp,loginUser}