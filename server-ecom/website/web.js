let express = require("express");
const { authRoute } = require("./authRoute");
const { productApi } = require("./ProductApi");

let webRoute = express.Router();
webRoute.use("/user",authRoute)
webRoute.use("/product",productApi)
module.exports={webRoute}