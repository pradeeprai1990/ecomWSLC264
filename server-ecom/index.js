
let express = require("express");
const mongoose = require('mongoose');
const { route } = require("./route");
let cors = require('cors');
const { adminModal } = require("./modal/adminModal");
let app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());

//for static path of img
app.use('/upload/category' , express.static('upload/category'))
app.use('/upload/story' , express.static('upload/story'))
app.use('/upload/slider' , express.static('upload/slider'))
app.use('/upload/subcategory' , express.static('upload/subcategory'))


app.use(route);


mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`).then(()=>{
    app.listen("8000" , async ()=>{
       
        let checkData=await adminModal.find();
        if(checkData.length==0){
            let obj={
                adminUname:'admin',
                adminUpassword:'admin123'
            }
            let adminTable=new adminModal(obj)
            let data= await adminTable.save();
        }
    })
})
