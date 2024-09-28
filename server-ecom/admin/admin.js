let express = require("express");
const { category } = require("./categoryroute");
const { color } = require("./colorroute");
const { size } = require("./sizeroute");
const { story } = require("./storyroute");
const { slider } = require("./sliderroute");
const { subcategory } = require("./subcatroute");
const { productRoute } = require("./productRoute");
const { adminRoute } = require("./adminRoutes");
const { checkAuth } = require("../middleware/checkAuth");
let admin = express();



admin.get("/" , (req,res)=>{
    res.send("welcome  to admin panel");

})


admin.use("/",adminRoute) //Create 
admin.use("/category",checkAuth,category)
admin.use("/subcat" ,checkAuth, subcategory)
admin.use("/color" ,checkAuth,color)
admin.use("/size" ,checkAuth, size)
admin.use("/story" ,checkAuth, story)
admin.use("/slider",checkAuth,slider)
admin.use("/product",checkAuth,productRoute)



module.exports = {admin}