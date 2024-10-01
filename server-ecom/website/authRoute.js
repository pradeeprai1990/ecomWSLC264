let express = require("express");
const { register } = require("../controler/website/userController");
let authRoute = express.Router();
authRoute.post("/register",register)

module.exports={authRoute}