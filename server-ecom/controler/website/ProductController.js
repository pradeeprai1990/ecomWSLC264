const { category } = require("../../admin/categoryroute");
const { parentcatmodal } = require("../../modal/parentcatmodal");
const { productModal } = require("../../modal/productModel");
const { subcatmodal } = require("../../modal/subcatmodal");


let parentCategory=async (req,res)=>{
    let catData=await parentcatmodal.find();

    let obj={
        status:1,
        data:catData
    }

    res.send(obj)
}


let productData=async (req,res)=>{
    let {slug}=req.params;
    let catData=await parentcatmodal.findOne({slug:slug});
    if(catData){
        let catId=catData._id;
        let subData=await subcatmodal.find(({parentcategory:catId}))
        let productData=await productModal.find(({productPatrentCat:catId}))

        let obj={
            status:1,
            categoryData:catData,
            subCataData:subData,
            Produuctdata:productData
        }
        res.send(obj)
    }
    

}
module.exports={parentCategory,productData}