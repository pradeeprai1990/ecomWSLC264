let express = require("express");
const { admin } = require("./admin/admin");
let route = express();
// route.get("/",(req,res)=>{
//     res.send("hello world")
// })


route.use("/admin" , admin)

module.exports = {route}

