const express = require('express');
const { createProduct, updateProduct, deleteProduct, getSingleProduct, getAllProducts, getProductQuery, getLatestProduct , ProductSearch} = require('../controllers/product');
const Product = require('../models/product');
const { createError } = require('../utilities/error');
const router = express.Router();
const {verifyAdmin} = require('../utilities/verifyToken')

// create
router.post('/',createProduct)
// update
router.put('/update/:id',updateProduct)
// delete
router.delete('/delete/:id',deleteProduct)
// get
router.get('/single/:id',getSingleProduct)
// get all
router.get('/all',getAllProducts)


// get product by query
router.get('/productCategory',getProductQuery)
// get latest product
router.get('/latestProduct',getLatestProduct)
// search any product
router.get('/productSearch',ProductSearch)




module.exports = router;