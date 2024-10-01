let express = require("express");
const { admin } = require("./admin/admin");
const { webRoute } = require("./website/web");
let route = express();
// route.get("/",(req,res)=>{
//     res.send("hello world")
// })


route.use("/admin" , admin)
route.use("/website" , webRoute)
module.exports = {route}

