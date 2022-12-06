const express = require('express');
const { createCart,updateCart,deleteCart, getSingleCart,getAllCartsGeneral,deleteSingleCartGeneral,countCart } = require('../controllers/cart');
const router = express.Router();
const {verifyUser} = require('../utilities/verifyToken')

// create
router.post('/add/:userId',verifyUser,createCart),
// delete
router.delete('/delete/:id/:userId',verifyUser,deleteCart)
// get
router.get('/single/:id',verifyUser,getSingleCart)
// get all carts
router.get('/all',getAllCartsGeneral)
router.delete('/delgenSigCart/:id',deleteSingleCartGeneral)

// countStatus
router.get('/countStatus',countCart)

module.exports = router;