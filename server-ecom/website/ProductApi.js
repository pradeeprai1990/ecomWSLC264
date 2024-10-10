let express = require("express");
const { parentCategory, productData } = require("../controler/website/ProductController");

let productApi = express.Router();

productApi.get("/parent-category",parentCategory)
productApi.get("/product-data/:slug",productData)
module.exports={productApi}