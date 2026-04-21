const mongoose = require("mongoose")
const newSchema =new mongoose.Schema({
    shortUrl:{
        type:String,
        required:true,
        unique:true},
        actUrl:{
            type:String,
            required:true,
        }
    },
    {timestamps:true});

const urlMod=mongoose.model('urlMod',newSchema)
module.exports={urlMod};