const cloudinary = require('cloudinary')
require('../utils/utils')


const UploadImage = async(req,res)=>{
 const {image} = req.body
 try {
  cloudinary.v2.uploader
.upload(image)
.then(result=>{
  res.status(200).json(result.url)
})
 } catch (error) {
  res.status(500).send(error)
 }
}
module.exports = {UploadImage}