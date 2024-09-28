let express = require("express");
let multer = require("multer");
const { getAllParentCatgeory, getSize, addProduct, getColor, getSubCatgeory, insertProduct, productView } = require("../controler/ProductControlle");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload/product");
    },
    filename: function (req, file, cb) {
      let imageName = Date.now() + file.originalname;
      cb(null, imageName);
    },
  });
  
  const upload = multer({ storage: storage }).fields([
    {
      name:'productImage',
      maxCount:1
    },
    {
      name: 'productGallery',
      maxCount: 10
    }
  ]);

let productRoute = express.Router();

// productRoute.post("/insert" ,upload.single('productImage'),addProduct)

productRoute.get('/category',getAllParentCatgeory)
productRoute.get('/subcategory/:cid',getSubCatgeory)
productRoute.get('/size',getSize)
productRoute.get('/color',getColor);
productRoute.post('/add-product',upload, insertProduct);

productRoute.get('/view-product',productView);
module.exports={productRoute}