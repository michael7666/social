const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
// const multer = require("multer");
const cors = require("cors");
const path = require("path");
const bodyParser =  require("body-parser");
const dotenv = require("dotenv");



//route
const usersRoute = require("./router/users");
const authRoute = require("./router/auth")
const postRoute = require("./router/posts");
// const uploadRoute = require("./router/upload");



dotenv.config();


mongoose.connect(process.env.MONGODB_URLS, {useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true}, () => {
    console.log("connected to mongodb");
});


app.use("/images", express.static(path.join(__dirname, "/public/images")));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(bodyParser.urlencoded({limit: "100mb", extended: true, parameterLimit:100000}));
// app.use(express.static('public'));

// if(process.env.NODE_ENV === 'deveploment'){
//     app.use(cors({origin: `${process.env.CLIENT_URL}`}));
// }
const corsOptions ={
    origin: process.env.CLIENT_URL, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// app.use(cors());

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
        
//         cb(null, "/public/images/images");
//     },
//     filename: (req, file, cb) => {
//         cb(null, new Date() + "-" +file.originalname, req.name.body);
//     },
//     limits: {
//         fileSize: 100000
//     },
//     fileFilter: (req, file, cb ) =>{
//         if (!file.originalname.match(/\.(jpeg|jpg|png|)$/)){
//             return cb(
//                 new error(
//                     'only jpe, jpg, png '
//                 )
//             );
//         }
//         cb(undefined, true);
//     }
// }

// );

// const upload = multer({storage: storage})
// app.post("/upload", upload.single("file"),  (req, res) =>{
//     try {
        
//         return  res.status(200).json("file uploaded successful");
       
//     } catch(err) {
//         res.status(400).send('Error while uploading file. Try again later.');  
//     }
// })

// app.get("/upload", async (req, res)=>{
   
//    try {
//     const files = await Posts.findOne({});
//     res.status(200).json(files);
//    } catch (error) {
//     res.status(400).send('Error while getting list of files. Try again later.');
       
//    }
// })


//route middwares
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
// app.use("/api/upload", uploadRoute);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () =>{
    console.log("Backend server is  running ")
});