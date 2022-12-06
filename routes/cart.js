const express = require('express');
const { createCart,updateCart,deleteCart, getSingleCart,getAllCartsGeneral,deleteSingleCartGeneral,countCart } = require('../controllers/cart');
const router = express.Router();
const {verifyUser} = require('../utilities/verifyToken')

// create
router.post('/addCart/:userId',createCart),
// delete
router.delete('/deleteCart/:id/:userId',deleteCart)
// get
router.get('/cartSingle/:id',getSingleCart)
// get all carts
router.get('/all',getAllCartsGeneral)
router.delete('/delgenSigCart/:id',deleteSingleCartGeneral)

// countStatus
router.get('/countStatus',countCart)

module.exports = router;