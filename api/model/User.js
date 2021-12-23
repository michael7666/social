const mongoose = require("mongoose");

const UserSchame = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        min: 6,
        max: 32,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max:56,
        unique: true
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    coverPicture: {
        type: String,
        default: "",
    },
    followers:{
        type: Array,
        default: [],
    },
    followings:{
        type: Array,
        default: [],
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    desc: {
        type: String,
        max: 60
    },
    city: {
        type: String,
        max: 60
    }, 
    from: {
        type: String,
        max: 60
    },
    relationship: {
        type: String,
        enum: [1,2, 3]
    }

},
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchame);