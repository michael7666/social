const User = require("../model/User");
const bcryptjs = require("bcryptjs");

module.exports.Register = async (req, res) => {
     try {
         //generate new password
         const salt = await bcryptjs.genSalt(10);
         const hashedPassword = await bcryptjs.hash(req.body.password, salt);
         //create new user
         const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword ,
        });


       //save user and return response
         const user = await newUser.save();
         res.status(200).json(user);
     } catch (err) {
         res.status(500).json(err)
     }
}


module.exports.Login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("user not found");
       
        const vaildPassword = await bcryptjs.compare(req.body.password, user.password);
        !vaildPassword && res.status(400).json("Wrong Password");

        res.status(200).json(user);

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}