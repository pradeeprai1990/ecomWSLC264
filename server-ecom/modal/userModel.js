let mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
    {
    userName:{
        type : String,
        required:true,
    },
    userPassword:{
        type : String,
        required:true,
    },
  
    userEmail:{
        type : String,
        required:true,
    },
  
    userStatus:{
        type : Boolean,
        default:1
    }
},
{
    timestamps:true,
})
let userModal = mongoose.model("user" , userSchema);
module.exports = {userModal};