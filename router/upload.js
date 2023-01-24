const express = require('express')
const { UploadImage } = require('../controllers/upload')
const router = express.Router()

router.post('/',UploadImage)

module.exports = router