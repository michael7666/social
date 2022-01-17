const router = require("express").Router();
// const multer = require("multer");
const Upload = require("../model/Upload");
const Post = require("../model/Post");


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
        
//         // cb(null, "./images");
//         cb(null, "./images");
//     },
//     filename: (req, file, cb) => {
//         cb(null,  Date.new() + "-" +file.originalname, req.name.body);
//     },
//     limits: {
//         fileSize: 9000000
//     },
//     fileFilter: (req, file, cb ) =>{
//         // if (!file.originalname.match(/\.(jpeg|jpg|png|)$/)){
//         //     return cb(
//         //         new error(
//         //             'only jpe, jpg, png '
//         //         )
//         //     );
//         // }
//         if((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')){
//             cd(null, true);
//         }else {
//             cd(null, false);
//         }
//         cb(undefined, true);
//     }
// }

// );
// // app.use(multer({dest:  '/public/images'}).single('file'));
// const upload = multer({storage: storage})
// router.post("/upload", upload.single("file"),  (req, res) =>{
    
//     try {
//         if(req.file){
//             return  res.status(200).json({
//                 success: true,
//                 message: "file uploaded successful",
//                 file: req.file
//             });
//         }else{
//             res.status(404).send('Error while uploading file. Try again later.');
//         }
//         // return  res.status(200).json("file uploaded successful");
       
//     } catch(err) {
//         res.status(500).send('Error while uploading file. Try again later.');  
//     }
// })


router.post("/add", async(req, res) =>{
    const newUpload = new Upload(req.body);
    try{
       const savedUpload = await newUpload.save();
       res.status(200).json(savedUpload);
    }catch(err){
        // console.log(err.data.res);
        console.log(err);
      res.status(500).json({
          success: false,
          message: "unable to upload!",
          data: null,
          
      })
    }
})

router.get("/", async (req, res)=>{
   
   try {
    const files = await Post.findOne({});
    res.status(200).json(files);
   } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
       
   }
})




module.exports = router;