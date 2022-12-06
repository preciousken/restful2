const express = require('express');
const router = express.Router()
const {UploadImages} = require('../controllers/upload');

// uploading images to the cloudinary
router.post('/uploadimages',UploadImages)

module.exports = router