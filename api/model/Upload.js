const mongoose = require("mongoose");


const PostSchame = new mongoose.Schema({
    img: {
        type: String,
       
    },
   
}, {timestamps: true})


module.exports = mongoose.model("Upload", PostSchame);