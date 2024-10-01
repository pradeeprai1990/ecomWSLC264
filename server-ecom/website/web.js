let express = require("express");
const { authRoute } = require("./authRoute");
let webRoute = express.Router();
webRoute.use("/user",authRoute)

module.exports={webRoute}