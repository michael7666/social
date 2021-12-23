const mongoose = require("mongoose");


const PostSchame = new mongoose.Schema({

   userId: {
       type: String,
       required: true
   },
   desc: {
       type: String,
       max: 600,
       required: true
   },
   likes: {
     type: Array,
     default: []
   },
   img: {
       type: String,
       required: true
   }
},
{timestamps: true}
);

module.exports = mongoose.model("Post", PostSchame);