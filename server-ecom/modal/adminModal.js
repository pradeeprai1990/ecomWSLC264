let mongoose = require("mongoose");

let adminSchema = new mongoose.Schema(
    {
    adminUname:{
        type : String,
        required:true,
    },
    adminUpassword:{
        type : String,
        required:true,
    },
  

    adminStatus:{
        type : Boolean,
        default:1
    }
},
{
    timestamps:true,
})
let adminModal = mongoose.model("admin" , adminSchema);
module.exports = {adminModal};