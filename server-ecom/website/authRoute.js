let express = require("express");
const { register, verifyOtp, loginUser } = require("../controler/website/userController");
let authRoute = express.Router();
authRoute.post("/register",register)
authRoute.post("/verify-otp",verifyOtp)
authRoute.post("/login",loginUser)
module.exports={authRoute}