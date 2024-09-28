const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: String,
    productDescription: String,
    productsortDescription: String,
    productPatrentCat:{
        type:mongoose.Types.ObjectId,
        ref: "parentcategory" // reference to category collection by id
       
    },
    productsubPatrentCat:{
        type:mongoose.Types.ObjectId,
        ref: "subcategory" // reference to category c
    },
    productImage:String,
    productGallery:Object,
    productPrice:Number,
    productMrp:Number,
    productSize: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'size'
        }
    ],
    productColor:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'color'
        }
    ]


})

let productModal = mongoose.model("product" , productSchema);
module.exports = {productModal};