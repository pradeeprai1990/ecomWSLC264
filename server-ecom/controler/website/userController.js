
let myMap = new Map();
let register=(req,res)=>{

    let userOTP= String(Math.random()*9999999).slice(0,4)
    console.log(userOTP)
    //mail otp

    let toEmail=req.body.uemail // 

    //mail
     myMap.set('OTP',userOTP)

    res.status(200).json({message:'success', data: userOTP });
}


let verfiyOtp=(req,res)=>{
    let opt=req.body.otp;  //Cleint
    let getMyOtpt=myMap.get('OTP') //Server

}

module.exports={register}