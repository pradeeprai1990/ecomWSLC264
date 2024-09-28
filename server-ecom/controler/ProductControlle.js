const { colormodal } = require("../modal/colormodal")
const { parentcatmodal } = require("../modal/parentcatmodal")
const { productModal } = require("../modal/productModel")
const { sizemodal } = require("../modal/sizemodal")
const { subcatmodal } = require("../modal/subcatmodal")

let addProduct = (req, res) => {
    res.send("Product Insert APi")
}

let getAllParentCatgeory = async (req, res) => {
    let category = await parentcatmodal.find({ categoryStatus: 1 })
    let obj = {
        status: 1,
        data: category
    }
    res.send(obj)
}

let getSize = async (req, res) => {
    let sizeData = await sizemodal.find({ sizeStatus: true })
    let obj = {
        status: 1,
        data: sizeData
    }
    res.send(obj)
}

let getColor = async (req, res) => {
    let colorData = await colormodal.find({ colorStatus: true })
    let obj = {
        status: 1,
        data: colorData
    }
    res.send(obj)
}

let getSubCatgeory = async (req, res) => {
    let cid = req.params.cid;
    let subcat = await subcatmodal.find({ parentcategory: cid })
    let obj = {
        status: 1,
        data: subcat
    }
    res.send(obj)
}

const insertProduct = async (req, res) => {

    const {productName,productDescription,productsortDescription,productPatrentCat,productsubPatrentCat,productPrice,productMrp,productSize,productColor,status} = req.body;
   
    let data={
        productName,
        productDescription,
        productsortDescription,
        productPatrentCat,
        productsubPatrentCat,
        productPrice,
        productMrp,
        productSize,
        productColor,
        status    
    }
  
    if (req.files) {
        if (req.files.productImage) {
            data.productImage = req.files.productImage[0].filename;
        } 
       

        if (req.files.productGallery) {

            let allImages=  req.files.productGallery.map((img) => img.filename)
            data.productGallery =allImages
        }

       
    }

   const dataToSave = new productModal(data);

   const response = await dataToSave.save();

    // console.log(response)

    res.send(response);
}


let productView=async (req,res)=>{
    let poductData= await productModal.find().
    populate('productPatrentCat','categoryName').
    populate('productsubPatrentCat','subcategoryName').
    populate('productSize','sizeName').
    populate('productColor','colorName');
    
    let obj={
        status:1,
        data:poductData
    }
    res.send(obj)
}

module.exports = { productView,getSubCatgeory, addProduct, getAllParentCatgeory, getSize, getColor, insertProduct }