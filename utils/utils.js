const cloudinary = require('cloudinary')
require('dotenv').config()

cloudinary.config({ 
 cloud_name: process.env.cloud_name, 
 api_key: process.env.api_key, 
 api_secret: process.env.api_secret
});

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });