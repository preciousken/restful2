require('dotenv').config()
const cloudinary = require("cloudinary")

// uploading images to cloudinary
const UploadImages = async (req,res,next)=>{
  // console.log(req.body)
    try {
        cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRETAPI 
  });

cloudinary.v2.uploader.upload(req.body.image,
  { public_id: "kinkycoily" }, 
  function(error, result) {
    // res.send(result.url)
    if(result){
      res.send(result.url)
      console.log(result.url)
    }else{
      console.log(result.url)
      res.send(error)
    }
   });
    } catch (error) {
        next(error)
    }


















}

module.exports = {UploadImages}