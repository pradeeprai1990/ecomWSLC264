
let express = require("express");
const { login } = require("../controler/AuthContoller");
let adminRoute = express.Router();


adminRoute.post("/login" , login);


module.exports={adminRoute}